<script lang="ts">
	import DataTable from '$lib/components/datatable/DataTable.svelte';
	import Tab from '$lib/components/tab/Tab.svelte';
	import type { DataTableCol } from '$lib/types/table';
	let responseText: string = '';

	interface Account {
		id: number;
		name: string;
		industry: string;
		phone: string;
		street: string;
		city: string;
		state: string;
		code: string;
		country: string;
	}

	let columns: DataTableCol[] = [
		{ feild: 'id', headerName: 'ID' },
		{ feild: 'accountName', headerName: 'Account' },
		{ feild: 'phone', headerName: 'Phone' },
		{ feild: 'code', headerName: 'Code' }
	];

	let rows = [
		// {
		// 	id: 1,
		// 	accountName: 'Web Revived',
		// 	phone: '407 924 6902',
		// 	code: '32750'
		// },
		// {
		// 	id: 2,
		// 	accountName: 'Over Rice',
		// 	phone: '407 924 6902',
		// 	code: '32750'
		// }
	];

	Array.from({ length: 54 }).forEach((_, i) => {
		rows = [
			...rows,
			{
				id: i + 1,
				accountName: 'Over Rice',
				phone: '407 924 6902',
				code: '32750'
			}
		];
	});

	let selectedRows: number[] = [];

	$: selectedData = selectedRows.map((rowIndex) => rows[rowIndex]);
</script>

<section>
	<Tab />
	<div class="card">
		<h4>Accounts</h4>
		<DataTable {columns} {rows} bind:selectedRows />
	</div>
</section>

<style lang="scss">
	section {
		gap: 1rem;
		width: 100%;
		height: 100%;
	}
	.card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 0 auto;
		width: 100%;
	}
</style>
