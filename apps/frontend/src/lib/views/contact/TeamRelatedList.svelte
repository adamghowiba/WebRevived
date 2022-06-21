<script lang="ts" context="module">
	interface AssignSaveDispatcher {
		detail: number[];
	}
</script>

<script lang="ts">
	import projectApi from '$lib/api/project-api';
	import userApi from '$lib/api/user-api';
	import Button from '$lib/components/button/Button.svelte';
	import AssignModal from '$lib/components/modal/modals/AssignModal.svelte';
	import RelatedTable from '$lib/components/releated-list/Related-Table.svelte';
	import type { DataTableCol, DataTableRowLink } from '$lib/types/table';
	import type { Project, User } from '@webrevived/types/prisma';
	import { createEventDispatcher, onDestroy } from 'svelte';

	export let users: User[];
	export let isLoading: boolean = false;
	export let isAssignModalOpen: boolean = false;

	let allUserData: User[] = [];

	const dispatch = createEventDispatcher();

	const columns: DataTableCol[] = [
		{ feild: 'id', headerName: 'id' },
		{ feild: 'name', headerName: 'name' },
		{ feild: 'role', headerName: 'role' },
		{ feild: 'title', headerName: 'title' }
	];

	const aggergateUserName = (user: User) => {
		return `${user.first_name} ${user.last_name}`;
	};

	/**
	 * Add a href to the project name,
	 */
	const userRowsWithLink = (_users: User[]): Omit<User, 'first_name'>[] & { name: DataTableRowLink }[] => {
		return _users.map((user) => ({ ...user, name: { link: `#`, name: aggergateUserName(user) } }));
	};

	const populateAssignUsers = async () => {
		try {
			const usersResponse = await userApi.getUsers();
			const attachedUserIds = users.map((user) => user.id);

			allUserData = usersResponse.filter((user) => !attachedUserIds.includes(user.id));
		} catch (error) {
			console.debug(error);
		}
	};

	onDestroy(() => {
		isLoading = false;
	});

	$: if (isAssignModalOpen) populateAssignUsers();
</script>

<RelatedTable {columns} rows={userRowsWithLink(users)} title="Users">
	<div slot="actions" class="actions">
		<Button color="default" size="xs" on:click={() => (isAssignModalOpen = true)}>Assign</Button>
	</div>
</RelatedTable>

{#if isAssignModalOpen}
	<AssignModal
		{isLoading}
		{columns}
		dataRows={allUserData}
		modelName="user"
		on:save
		on:exit={() => (isAssignModalOpen = false)}
	/>
{/if}

<style lang="scss">
</style>
