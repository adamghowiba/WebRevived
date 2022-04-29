<script lang="ts">
	import Table from '$lib/components/table/Table.svelte';
	import TableBody from '$lib/components/table/TableBody.svelte';
	import TableCell from '$lib/components/table/TableCell.svelte';
	import TableHeader from '$lib/components/table/TableHeader.svelte';
	import TableRow from '$lib/components/table/TableRow.svelte';
	import type { DataTableCol } from '$lib/types/table';
	import TableFooter from '../table/TableFooter.svelte';
	import { slide, fade } from 'svelte/transition';

	export let selectable: boolean = false;
	export let expandable: boolean = true;
	export let columns: DataTableCol[] = [];
	export let rows: { [key: string]: any }[] = [];

	export let selectedRows: number[] = [];
	export let expandedRows: number[] = [];

	let page = 0;
	let rowsPerPage: number;

	function handleSelectRow(event: MouseEvent) {
		const target = event.target as HTMLElement;
		if (!target.dataset.row) return;

		const rowIndex = parseInt(target.dataset.row, 10);

		if (selectedRows.length && selectedRows.indexOf(rowIndex) > -1) {
			selectedRows = selectedRows.filter((row) => row !== rowIndex);
			return;
		}

		selectedRows = [...selectedRows, rowIndex];
	}

	function handleClickRowsHeader() {
		if (selectedRows.length) return (selectedRows = []);
		selectedRows = Array.from({ length: rows.length }, (_, i) => i);
	}

	/* TODO: Join this and handle select rows */
	function handleExpandClick(event: MouseEvent) {
		const target = event.target as HTMLElement;
		if (!target.dataset.row) return;

		const rowIndex = parseInt(target.dataset.row, 10);

		if (expandedRows.length && expandedRows.indexOf(rowIndex) > -1) {
			expandedRows = expandedRows.filter((row) => row !== rowIndex);
			return;
		}

		expandedRows = [...expandedRows, rowIndex];
	}

	$: rowStart = page * rowsPerPage;
	$: rowEnd = (page + 1) * rowsPerPage;

	$: console.log(selectedRows);
</script>

<div class="table-wrapper">
	<Table>
		<TableHeader>
			<TableRow padding="10px 10px">
				{#if selectable}
					<TableCell width="0px">
						<input
							type="checkbox"
							checked={Boolean(selectedRows.length)}
							on:click={handleClickRowsHeader}
						/>
					</TableCell>
				{/if}
				{#if expandable}
					<TableCell />
				{/if}
				{#each columns as col}
					<TableCell>{col.headerName}</TableCell>
				{/each}
			</TableRow>
		</TableHeader>

		<TableBody>
			{#each rows.slice(rowStart, rowEnd) as row, i (row.id)}
				{@const realtiveIndex = i + rowsPerPage * page}
				{@const isSelected = selectedRows.indexOf(realtiveIndex) > -1}

				<TableRow padding="15px 10px" highlighted={isSelected}>
					{#if selectable}
						<TableCell>
							<input
								data-row={realtiveIndex}
								type="checkbox"
								checked={isSelected}
								on:click={handleSelectRow}
							/>
						</TableCell>
					{/if}

					{#if expandable}
						<TableCell width="0px">
							<button data-row={realtiveIndex} on:click={handleExpandClick}>O</button>
						</TableCell>
					{/if}

					<!-- Tabel Data  -->
					{#each Object.values(row) as data}
						<TableCell>{data}</TableCell>
					{/each}
				</TableRow>

				{#if expandedRows.indexOf(realtiveIndex) > -1}
					<!-- {#if i === 0} -->
					<tr>
						<td class="dropdown" colspan={columns.length + 1}>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia maxime totam
								maiores, ab voluptate, architecto accusamus consequatur beatae commodi vel fuga,
								iure optio? Provident quos ab suscipit quisquam harum reprehenderit!
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia maxime totam
								maiores, ab voluptate, architecto accusamus consequatur beatae commodi vel fuga,
								iure optio? Provident quos ab suscipit quisquam harum reprehenderit!
							</p>
						</td>
					</tr>
				{/if}
			{/each}
		</TableBody>
	</Table>
	<TableFooter bind:rowsPerPage bind:page rowSize={rows.length} />
</div>

<style lang="scss">
	.dropdown {
		display: table-cell;
		// padding: 30px 15px;
		height: 200px;
		background-color: rgba(255, 228, 196, 0.13);
		white-space: normal;
	}
	input {
		width: 22px;
		height: 22px;
	}
	.table-wrapper {
		width: 100%;
	}
</style>
