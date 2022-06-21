<script lang="ts">
	import accountApi from '$lib/api/account-api';
	import userApi from '$lib/api/user-api';
	import Button from '$lib/components/button/Button.svelte';
	import DataTable from '$lib/components/datatable/DataTable.svelte';
	import AssignModal from '$lib/components/modal/modals/AssignModal.svelte';
	import RelatedTable from '$lib/components/releated-list/Related-Table.svelte';
	import type { DataTableCol, DataTableRow, DataTableRowLink } from '$lib/types/table';
	import type { User } from '@webrevived/types/prisma';

	export let representatives: User[];
	export let accountId: number;

	let isAssignModalOpen: boolean = false;
	let isAssignModalSaving: boolean = false;

	let assignRows = [];
	let selectedAssignRows: number[] = [];
	const assignColumns: DataTableCol[] = [
		{ feild: 'id', headerName: 'id' },
		{ feild: 'first_name', headerName: 'First' },
		{ feild: 'last_name', headerName: 'Last' },
		{ feild: 'role', headerName: 'role' },
		{ feild: 'title', headerName: 'title' }
	];

	const columns: DataTableCol[] = [
		{ feild: 'id', headerName: 'id' },
		{ feild: 'name', headerName: 'name' },
		{ feild: 'role', headerName: 'role' },
		{ feild: 'title', headerName: 'title' }
	];

	const parseIds = (array: any[]) => {
		return array.map((data) => data?.id);
	};

	const handleAssignSave = async () => {
		if (!assignRows) return;
		isAssignModalSaving = true;

		const selectedData = selectedAssignRows.map((row) => assignRows[row]);
		await accountApi.putAccount(accountId, { users: parseIds(selectedData) });

		isAssignModalOpen = false;
		isAssignModalSaving = true;
	};

	const repFetchFunction = async () => {
		const allUsers = await userApi.getUsers();
		const connectedUserIds = representatives.map((rep) => rep.id);
		assignRows = allUsers.filter((user) => !connectedUserIds.includes(user.id));
	};

	const aggregateRepName = (firstName: string, lastName: string) => `${firstName} ${lastName}`;

	const transformRep = (rep: User[]): User[] & { name: DataTableRowLink }[] => {
		return representatives.map((rep) => ({
			...rep,
			name: { link: `#`, name: aggregateRepName(rep.first_name, rep.last_name) }
		}));
	};

	$: if (isAssignModalOpen) repFetchFunction();
</script>

<RelatedTable {columns} rows={transformRep(representatives)} title="Team Assigned">
	<div class="actions" slot="actions">
		<Button color="default" size="xs" on:click={() => (isAssignModalOpen = true)}>Assign</Button>
	</div>
</RelatedTable>

{#if isAssignModalOpen}
	<AssignModal
		isLoading={isAssignModalSaving}
		on:save={handleAssignSave}
		on:exit={() => (isAssignModalOpen = false)}
	>
		<DataTable
			columns={assignColumns}
			rows={assignRows}
			tableStyles={{ header: { backgroundColor: 'transparent' } }}
			selectable
			bind:selectedRows={selectedAssignRows}
		/>
	</AssignModal>
{/if}

<style lang="scss">
</style>
