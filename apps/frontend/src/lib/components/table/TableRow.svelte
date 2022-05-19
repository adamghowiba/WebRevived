<script lang="ts">
	import { goto } from '$app/navigation';
	import type { TableCellStyle } from '$lib/types/table';
	import { setContext } from 'svelte';

	export let padding: string = 'none';
	export let highlighted: boolean = false;
	export let href: string = null;

	// const handleRowClick = (event: MouseEvent) => {
	// 	const target = event.target as HTMLElement;

	// 	if (target.classList.contains('no-click')) return;
	// 	if (href) goto(href);
	// };

	setContext<TableCellStyle>('cellStyles', { padding });
</script>

<tr class:highlighted class:href on:click>
	<slot />
</tr>

<style lang="scss">
	tr {
		transition: background-color 0.15s linear;
		border-top: 1px solid var(--color-tran-light);
		position: relative;

		&.href:hover {
			cursor: pointer;
		}

		&.highlighted {
			background-color: rgba(161, 58, 209, 0.205);
		}

		&.highlighted:hover {
			background-color: rgba(161, 58, 209, 0.3);
		}

		&:hover {
			background-color: rgba(100, 100, 100, 0.234);
		}
	}
</style>
