<script lang="ts" context="module">
	interface AssignSaveDispatcher {
		detail: number[];
	}
</script>

<script lang="ts">
	import projectApi from '$lib/api/project-api';
	import Button from '$lib/components/button/Button.svelte';
	import AssignModal from '$lib/components/modal/modals/AssignModal.svelte';
	import RelatedTable from '$lib/components/releated-list/Related-Table.svelte';
	import type { DataTableCol, DataTableRowLink } from '$lib/types/table';
	import type { Project } from '@webrevived/types/prisma';
	import { createEventDispatcher, onDestroy } from 'svelte';

	export let projects: Project[];
	export let isLoading: boolean = false;
	export let isAssignModalOpen: boolean = false;
	// export let assignOptions: boolean = false;

	let allProjects: Project[] = [];

	const dispatch = createEventDispatcher();

	const columns: DataTableCol[] = [
		{ feild: 'id', headerName: 'id' },
		{ feild: 'name', headerName: 'name' },
		{ feild: 'type', headerName: 'type' },
		{ feild: 'createdAt', headerName: 'created', type: 'date' }
	];

	/**
	 * Add a href to the project name,
	 */
	const transformProject = (): Omit<Project, 'name'>[] & { name: DataTableRowLink }[] => {
		return projects.map((project) => ({ ...project, name: { link: `#`, name: project.name } }));
	};

	const populateAssignProjects = async () => {
		try {
			const _projects = await projectApi.getProjects();
			const attachedProjectIds = projects.map((project) => project.id);

			allProjects = _projects.filter((project) => !attachedProjectIds.includes(project.id));
		} catch (error) {
			console.debug(error);
		}
	};

	onDestroy(() => {
		isLoading = false;
	})

	$: if (isAssignModalOpen) populateAssignProjects();
</script>

<RelatedTable {columns} rows={transformProject()} title="Projects">
	<div slot="actions" class="actions">
		<Button color="default" size="xs" on:click={() => (isAssignModalOpen = true)}>Assign</Button>
	</div>
</RelatedTable>

{#if isAssignModalOpen}
	<AssignModal
		title="Assign website"
		{isLoading}
		{columns}
		dataRows={allProjects}
		on:save
		on:exit={() => (isAssignModalOpen = false)}
	/>
{/if}

<style lang="scss">
</style>
