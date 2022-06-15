<script lang="ts">
	import RelatedTable from '$lib/components/releated-list/Related-Table.svelte';
	import type { DataTableCol, DataTableRow, DataTableRowLink } from '$lib/types/table';
	import type { Project } from 'types/prisma';

	export let projects: Project[];

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
</script>

<RelatedTable {columns} rows={transformProject()} title="Projects" />

<style lang="scss">
</style>
