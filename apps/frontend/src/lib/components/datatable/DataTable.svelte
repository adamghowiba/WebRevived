<script lang="ts" context="module">
	export interface TableStyles {
		header: {
			backgroundColor?: string;
		};
		body: {};
	}
	export type PartialTableStyles = Partial<TableStyles>;

	const DEFAULT_TABLE_STYLE: TableStyles = {
		header: {},
		body: {}
	};
</script>

<script lang="ts">
	import Table from '$lib/components/table/Table.svelte';
	import TableBody from '$lib/components/table/TableBody.svelte';
	import TableCell from '$lib/components/table/TableCell.svelte';
	import TableHeader from '$lib/components/table/TableHeader.svelte';
	import TableRow from '$lib/components/table/TableRow.svelte';
	import type { ColType, DataTableCol, DataTableRow } from '$lib/types/table';
	import { range } from '$lib/utils/number-utils';
	import { createEventDispatcher } from 'svelte';
	import { bool } from 'yup';
	import TableFooter from '../table/TableFooter.svelte';

	export let expandable: boolean = false;
	export let selectable: boolean = false;
	export let disableSelectionOnClick: boolean = true;
	export let columns: DataTableCol[] = [];
	export let rows: DataTableRow[] = [];

	export let tableStyles: PartialTableStyles = DEFAULT_TABLE_STYLE;

	export let shiftable: boolean = true;
	export let rowsPerPageOptions: number[] = [5, 10, 15, 20, 25, 30];
	export let rowsPerPage: number = rowsPerPageOptions[1];
	export let selectedRows: number[] = [];

	let page = 0;

	let lastSelectedRow: number;
	let shiftKeyHeld: boolean = false;

	const dispatch = createEventDispatcher();

	const getTableStyles = (styles: PartialTableStyles): TableStyles => ({
		...DEFAULT_TABLE_STYLE,
		...styles
	});

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
				acc[curr.feild] = data[curr.feild] ? transformRowValue(data[curr.feild], curr.type) : '';
				return acc;
			}, {});
		});

		return columnData;
	};

	const transformRowValue = (value: any[], type: ColType) => {
		if (type === 'date' && typeof value === 'string') {
			return new Date(value).toLocaleDateString('en-us', { dateStyle: 'short' });
		}

		return value;
	};

	const rowHasLink = (row: any) => row?.link && row?.name;

	$: styles = getTableStyles(tableStyles);
	$: rows = formatData(rows);
	$: rowStart = page * rowsPerPage;
	$: rowEnd = (page + 1) * rowsPerPage;
</script>

<svelte:window on:keydown={handleKeyDown} on:keyup={handleKeyUp} />

<div class="table-wrapper">
	<Table>
		<!-- HEADER -->
		<TableHeader backgroundColor={styles.header.backgroundColor}>
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

		<!-- BODY -->
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

					<!-- Tabel Data  -->
					{#each Object.values(row) as data, j}
						<TableCell>
							{#if rowHasLink(data)}
								<a href={data.link}>{data.name}</a>
							{:else}
								{data}
							{/if}
						</TableCell>
					{/each}
				</TableRow>
			{/each}
		</TableBody>
	</Table>

	<TableFooter {rowsPerPageOptions} bind:rowsPerPage bind:page rowSize={rows.length} />
</div>

<style lang="scss">
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
