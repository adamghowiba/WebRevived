<script lang="ts">
	import { goto } from '$app/navigation';
	import type { TableCellStyle } from '$lib/types/table';
	import { setContext } from 'svelte';

	export let padding: string = 'none';
	export let highlighted: boolean = false;
	export let href: string = null;
	export let header: boolean = false;

	setContext<TableCellStyle>('cellStyles', { padding });
</script>

<tr class:highlighted class:header class:href on:click>
	<slot />
</tr>

<style lang="scss">
	tr {
		transition: background-color 0.15s linear, opacity 0.15s ease-in-out;
		position: relative;
		// border-top: 1px solid var(--color-tran-light);

		& {
			border-bottom: 1px solid var(--color-gray-200);
		}

		&.href:hover {
			cursor: pointer;
		}

		&.highlighted {
			background-color: var(--color-primary-muted);
		}

		&.highlighted:hover {
			opacity: 0.9;
		}

		&:hover:not(.highlighted):not(.header) {
			background-color: var(--color-gray-100);
		}
	}
</style>
