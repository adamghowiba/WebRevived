<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Action from '../button/Action.svelte';

	export let title: string;

	const dispatch = createEventDispatcher();
</script>

<header>
	<slot>
		<h5>{title}</h5>

		<Action icon="heroicons-solid:x" on:click={() => dispatch('exit')} />
	</slot>
</header>

<style lang="scss">
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid var(--color-border);

		h5 {
			font-size: var(--text-body-lg);
		}
	}

	header {
		padding: var(--space-2xs) var(--space-xs);
	}
</style>
