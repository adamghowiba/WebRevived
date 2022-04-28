<script lang="ts">
	import type { TableCellStyle } from '$lib/types/table';
	import { setContext } from 'svelte';

	export let padding: string = 'none';
	export let highlighted: boolean = false;

	setContext<TableCellStyle>('cellStyles', { padding });
</script>

<tr class:highlighted>
	<slot />
</tr>

<style lang="scss">
	tr {
		transition: background-color 0.15s linear;

		&.highlighted {
			background-color: rgba(161, 58, 209, 0.205);
		}
		
		&.highlighted:hover {
			background-color: rgba(161, 58, 209, 0.300);
		}

		&:hover {
			background-color: rgba(100, 100, 100, 0.234);
		}
	}
</style>
