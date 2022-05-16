<script lang="ts">
	import type { TableCellStyle } from '$lib/types/table';
	import { parseStyles, parseStylesVars } from '$lib/utils/string-utils';
	import { getContext } from 'svelte';

	const cellStyles = getContext<TableCellStyle>('cellStyles');

	export let width: string = 'auto';
	export let minWidth: string = '40px';
</script>

<td style="{parseStylesVars({ width, minWidth })} {parseStyles({ ...cellStyles })}"><slot /></td>

<style lang="scss">
	td {
		width: var(--width);
		min-width: var(--minWidth);

		border-top: 1px solid var(--color-tran-light);
	}
</style>
