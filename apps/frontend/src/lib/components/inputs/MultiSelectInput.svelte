<script lang="ts">
	import { clickOutside } from '$lib/actions/clickOutside';
	import type { DropdownItems } from '$lib/types/dropdown';
	import { createEventDispatcher, onMount } from 'svelte';
	import Dropdown from './Dropdown.svelte';
	import TextInput from './TextInput.svelte';

	export let items: DropdownItems[] | undefined;
	export let isLoading: boolean = false;
	export let value: string;
	export let isDropdownOpen = false;

	const dispatch = createEventDispatcher();

	let inputElement: HTMLTextAreaElement;
	let inputWrapper: HTMLElement;

	const handleClickOutside = () => {
		isDropdownOpen = false;
	};

	const onInputFocus = (event) => {
		const { detail } = event;

		dispatch('focus', detail);
		isDropdownOpen = true;
	};

	const handleItemSelect = (event) => {
		const item: DropdownItems = event.detail;

		console.log(item);
	};

	const changeInputStart = () => {
		const blocks = inputWrapper.querySelectorAll('.block');
		const lastBlock = blocks[blocks.length - 1];

		const offsetLeft = lastBlock.clientLeft + lastBlock.clientWidth;
		console.log(offsetLeft);
		inputElement.style.paddingLeft = `${offsetLeft}px`;
	};

	const string = '';

	onMount(() => {
		// changeInputStart();
	});

	$: if (value && (!items || !items?.length)) isLoading = true;
</script>

<div class="search" use:clickOutside={handleClickOutside}>
	<div class="input-wrap" bind:this={inputWrapper}>
		<div class="blocks">
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
        </div>
		<div class="textarea" contenteditable="true">Write stuff here</div>
	</div>

	{#if !isLoading && isDropdownOpen}
		<Dropdown {items} on:select={handleItemSelect} />
	{/if}
</div>

<style lang="scss">
	.blocks {
		display: flex;
		border: 1px solid green;
		height: 100%;
        width: 100%;
		gap: var(--space-2xs);
        flex-wrap: wrap;
	}
	.block {
		width: 50px;
		height: 30px;
		background-color: blue;
	}

	.textarea {
		appearance: none;
        width: 100%;
		outline: none;
		border: 1px solid red;
	}
	.input-wrap {
		display: grid;
        grid-template-columns: auto minmax(50%, 1fr);
		height: 100%;
		height: 100%;
		position: relative;
		border: 1px solid gold;
	}
	.search {
		position: relative;
	}
</style>
