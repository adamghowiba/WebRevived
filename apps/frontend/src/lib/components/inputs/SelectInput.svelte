<script lang="ts">
	import { clickOutside } from '$lib/actions/clickOutside';
	import type { DropdownItems } from '$lib/types/dropdown';
	import { createEventDispatcher } from 'svelte';
	import Dropdown from './Dropdown.svelte';
	import TextInput from './TextInput.svelte';

	export let items: DropdownItems[] | undefined;
	export let isLoading: boolean = false;
	export let value: string;
	export let isDropdownOpen = false;

	const dispatch = createEventDispatcher();

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
		isDropdownOpen = false;

		console.log(item);
	};

	$: if (value && (!items || !items?.length)) isLoading = true;
	// export let textProps: PropsTypes<TextInput> = undefined;
</script>

<div class="search" use:clickOutside={handleClickOutside}>
	<TextInput
		name=""
		bind:value
		label="Search"
		placeholder="Search"
		on:focus={onInputFocus}
		{isLoading}
	/>
	{#if !isLoading && isDropdownOpen}
		<Dropdown {items} on:select={handleItemSelect} />
	{/if}
</div>

<style lang="scss">
	.search {
		position: relative;
	}
</style>
