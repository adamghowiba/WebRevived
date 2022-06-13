<script lang="ts">
	import type { PartialIcon } from '$lib/types/icon';
	import { createEventDispatcher } from 'svelte';
	import Button from '../button/Button.svelte';

	export let saveButton: { text: string; icon?: PartialIcon } = { text: 'Save' };
	export let saveDisabled: boolean = false;
	export let isLoading: boolean = false;

	/* Is the footer attached to the body? (Removes padding) */
	export let attached: boolean = false;

	const dispatch = createEventDispatcher();
</script>

<div class="footer" class:attached>
	<slot>
		<Button on:click={() => dispatch('exit')} style="ghost" color="gray" size="small">Cancel</Button
		>
		<Button disabled={saveDisabled} on:click={() => dispatch('save')} icon={saveButton?.icon}>
			{#if !isLoading}
				{saveButton.text}
			{:else}
				Loading...
			{/if}
		</Button>
	</slot>
</div>

<style lang="scss">
	.footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: var(--color-gray-100);
		padding: var(--space-xs) var(--space-xs);

		&.attached {
			padding: var(--space-xs) 0;
		}
	}
</style>
