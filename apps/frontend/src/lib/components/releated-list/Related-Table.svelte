<script lang="ts">
	import type { DataTableCol, DataTableRow } from '$lib/types/table';
	import DataTable from '../datatable/DataTable.svelte';
	import ReleatedList from './ReleatedList.svelte';

	export let title: string;
	export let columns: DataTableCol[];
	export let rows: DataTableRow[];
	export let isEmpty: boolean = !rows?.length;
</script>

<ReleatedList {title} {isEmpty}>
	<slot slot="actions" name="actions" />
	<DataTable
	{columns}
	{rows}
	tableStyles={{ header: { backgroundColor: 'transparent' } }}
	rowsPerPage={5}
	/>
</ReleatedList>

<style lang="scss">
</style>
