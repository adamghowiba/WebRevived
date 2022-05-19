<script lang="ts">
	import { parseStylesVars } from '$lib/utils/string-utils';

	export let width: string = '100%';
</script>

<div class="table-wrapper">
	<table style={parseStylesVars({ width })}>
		<slot />
	</table>
</div>

<style lang="scss">
	table {
		width: var(--width, 100%);
		border: 1px solid var(--color-tran-light);
		border-radius: 5px;
		white-space: nowrap;
		border-spacing: 0;
		border-collapse: collapse;
	}
	.table-wrapper {
		width: 100%;
		overflow-x: auto;
	}
</style>
