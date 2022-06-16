<script lang="ts">
	import type { DropdownItems } from '$lib/types/dropdown';
	import { createEventDispatcher } from 'svelte';

	export let items: DropdownItems[];

	const dispatch = createEventDispatcher();
</script>

<div class="dropdown">
	<div class="items">
		{#each items as { value, name }}
			<span
				class="items__item"
				on:click={() => dispatch('select', { value, name })}
				data-value={value}
			>
				{name}
			</span>
		{/each}
	</div>
</div>

<style lang="scss">
	.dropdown {
		width: 100%;
		position: absolute;
		left: 0;
		bottom: 0;
		background-color: var(--color-surface);
		box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
		border-radius: var(--br-sm);
		transform: translateY(100%);
		z-index: 10;
	}

	.items {
		display: flex;
		flex-direction: column;

		&__item {
			padding: var(--space-2xs) var(--space-xs);
			transition: background-color 0.15s linear;
		}

		&__item:hover {
			background-color: var(--color-primary-muted);
			cursor: pointer;
		}
	}
</style>
