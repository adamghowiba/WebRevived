<script lang="ts">
	import Table from '$lib/components/table/Table.svelte';
	import TableBody from '$lib/components/table/TableBody.svelte';
	import TableCell from '$lib/components/table/TableCell.svelte';
	import TableHeader from '$lib/components/table/TableHeader.svelte';
	import TableRow from '$lib/components/table/TableRow.svelte';
	import type { DataTableCol } from '$lib/types/table';
	import { range } from '$lib/utils/number-utils';
	import { createEventDispatcher } from 'svelte';
	import TableFooter from '../table/TableFooter.svelte';
	
	export let expandable: boolean = false;
	export let selectable: boolean = false;
	export let disableSelectionOnClick: boolean = false;
	export let columns: DataTableCol[] = [];
	export let rows: { [key: string]: any }[] = [];

	export let shiftable: boolean = true;

	let selectedRows: number[] = [];
	let expandedRows: number[] = [];

	let page = 0;
	let rowsPerPage: number;

	let lastSelectedRow: number;
	let shiftKeyHeld: boolean = false;

	const dispatch = createEventDispatcher();

	const fillRow = (start, end) => {
		const rangeArray = range(start, end);

		rangeArray.forEach((num) => {
			const numIndex = selectedRows.indexOf(num);

			if (numIndex > -1) {
				selectedRows = selectedRows.filter((rowIndex) => rowIndex !== num);
			} else {
				selectedRows = [...selectedRows, num];
			}
		});
		// selectedRows = [...selectedRows, ...range(lastSelectedRow, rowIndex)];
		// console.debug('Mass selecting rows', range(lastSelectedRow, rowIndex));
		// console.debug('Rows Selected', selectedRows);
	};

	/**
	 * Logic for selecting a row.
	 * @param rowIndex
	 */
	const selectRow = (rowIndex: number) => {
		if (selectedRows.length && selectedRows.indexOf(rowIndex) > -1) {
			selectedRows = selectedRows.filter((row) => row !== rowIndex);
			return;
		}

		if (shiftable && lastSelectedRow != null && shiftKeyHeld) {
			// selectedRows = [...selectedRows, ...range(lastSelectedRow, rowIndex)];
			fillRow(lastSelectedRow, rowIndex);
			console.debug('Mass selecting rows', range(lastSelectedRow, rowIndex));
		}

		lastSelectedRow = rowIndex;
		selectedRows = [...selectedRows, rowIndex];
	};

	/**
	 * Handle header input click
	 */
	function handleClickRowsHeader() {
		if (selectedRows.length) return (selectedRows = []);
		selectedRows = Array.from({ length: rows.length }, (_, i) => i);
	}

	/**
	 * Handle selectable input click.
	 * @param event
	 */
	function handleClickInput(event: MouseEvent) {
		event.stopPropagation();

		const target = event.target as HTMLElement;
		if (!target.dataset.row) return;

		const rowIndex = parseInt(target.dataset.row, 10);

		selectRow(rowIndex);
	}

	/**
	 * Handle table row click
	 * @param index - Index of data at the row being clicked.
	 */
	const handleRowClick = (index) => {
		if (disableSelectionOnClick) return;

		dispatch('rowClick', { index, selectedRows });

		selectRow(index);
	};

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

	const handleKeyDown = (event: KeyboardEvent) => {
		if (!shiftable || shiftKeyHeld) return;
		shiftKeyHeld = event.shiftKey;
	};

	const handleKeyUp = (event: KeyboardEvent) => {
		if (!shiftable) return;
		shiftKeyHeld = event.shiftKey;
	};

	const formatData = (data: any[]) => {
		const columnData = data.map((data) => {
			return columns.reduce((acc: any, curr) => {
				if (!data[curr.feild]) {
					acc[curr.feild] = '';
				} else {
					acc[curr.feild] = data[curr.feild];
				}
				return acc;
			}, {});
		});

		return columnData;
	};

	$: rows = formatData(rows);
	$: rowStart = page * rowsPerPage;
	$: rowEnd = (page + 1) * rowsPerPage;
</script>

<svelte:window on:keydown={handleKeyDown} on:keyup={handleKeyUp} />

<div class="table-wrapper">
	<Table>
		<TableHeader>
			<TableRow padding="10px 10px" header>
				{#if selectable}
					<TableCell width="0px" padding="0px">
						<div class="input-wrap">
							<input
								type="checkbox"
								checked={Boolean(selectedRows.length)}
								on:click={handleClickRowsHeader}
							/>
						</div>
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
			{#each rows.slice(rowStart, rowEnd) as row, i}
				{@const realtiveIndex = i + rowsPerPage * page}
				{@const isSelected = selectedRows.indexOf(realtiveIndex) > -1}

				<TableRow
					href="/adam"
					padding="15px 10px"
					highlighted={isSelected}
					on:click={() => handleRowClick(realtiveIndex)}
				>
					{#if selectable}
						<TableCell padding="0px">
							<div class="input-wrap">
								<input
									data-row={realtiveIndex}
									type="checkbox"
									checked={isSelected}
									on:click={handleClickInput}
								/>
							</div>
						</TableCell>
					{/if}

					{#if expandable}
						<TableCell width="0px">
							<button data-row={realtiveIndex} on:click={handleExpandClick}>O</button>
						</TableCell>
					{/if}

					<!-- Tabel Data  -->
					{#each Object.values(row) as data, j}
						<TableCell>
							{#if typeof data === 'object'}
								<a href={data.link}>{data.name}</a>
							{:else}
								{data}
							{/if}
						</TableCell>
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
	.input-wrap {
		padding-left: var(--space-2xs);
		display: flex;
		align-items: center;
	}
	input {
		margin: 0;
		width: 16px;
		height: 16px;
	}
	.table-wrapper {
		font-size: var(--text-body);
		width: 100%;
	}
</style>
