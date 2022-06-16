<script lang="ts">
	import { clickOutside } from '$lib/actions/clickOutside';
	import type { DropdownItems } from '$lib/types/dropdown';
	import { createEventDispatcher } from 'svelte';
	import Dropdown from './Dropdown.svelte';
	import TextInput from './TextInput.svelte';

	export let items: DropdownItems[] | undefined;
	export let value: any = undefined;
	export let label: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let isDropdownOpen = false;
	export let isLoading: boolean = false;
	export let selectedName: string = undefined;

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
		value = item;
		selectedName = item.name;
	};

	$: if (value && (!items || !items?.length)) isLoading = true;
	$: selectedValue = items.find((item) => item.value === value).name;
</script>

<div class="search" use:clickOutside={handleClickOutside}>
	<TextInput
		name=""
		{label}
		{placeholder}
		value={selectedValue}
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
