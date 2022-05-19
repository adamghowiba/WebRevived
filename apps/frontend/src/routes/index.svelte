<script lang="ts">
	import { projectsStore, type Project } from '$lib/api/store/project-sapi';
	import DataTable from '$lib/components/datatable/DataTable.svelte';
	import type { DataTableCol } from '$lib/types/table';
	import { onMount } from 'svelte';

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
		{ feild: 'name', headerName: 'Project' },
		{ feild: 'type', headerName: 'Type' },
		{ feild: 'account_id', headerName: 'Account Id' },
		{ feild: 'createdAt', headerName: 'Created' },
		{ feild: 'description', headerName: 'Description' },
		{ feild: 'slack_channel', headerName: 'Slack Channel' }
	];

	const transformProjectData = (projects: Project[] & { link: string }) => {
		const data = projects.map(
			({ name, id, type, account_id, createdAt, description, slack_channel }) => ({
				id,
				name,
				type,
				account_id,
				createdAt,
				description,
				slack_channel,
				link: 'hello',
				max: 'more',
				bam: 'dowdawodm'
			})
		);

		return data;
	};

	const handleRowClick = ({ detail: index }) => {
		console.log(index);
	};

	let selectedRows: number[] = [];
	$: selectedData = selectedRows.map((rowIndex) => $projectsStore[rowIndex]);
</script>

<section>
	<div class="card">
		<h4>Accounts</h4>
		{#await $projectsStore || projectsStore.getProjects()}
			<h4>Loading...</h4>
		{:then project}
			<DataTable
				{columns}
				rows={transformProjectData(project)}
				selectable
				on:rowClick={handleRowClick}
			/>
		{:catch error}
			<span>{error}</span>
		{/await}
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
		padding: 2rem;
	}
</style>
