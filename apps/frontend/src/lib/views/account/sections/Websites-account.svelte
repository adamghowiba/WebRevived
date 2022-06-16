<script lang="ts">
	import RelatedTable from '$lib/components/releated-list/Related-Table.svelte';
	import type { DataTableCol, DataTableRow, DataTableRowLink } from '$lib/types/table';
	import type { Website } from 'types/prisma';

	export let websites: Website[];

	const columns: DataTableCol[] = [
		{ feild: 'id', headerName: 'id' },
		{ feild: 'url', headerName: 'URL' },
	];

	/**
	 * Add a href to the project name,
	 */
	const transformProject = (): Omit<Website, 'url'>[] & { url: DataTableRowLink }[] => {
		return websites.map((website) => ({ ...website, url: { link: `#`, name: website.url } }));
	};
</script>

<RelatedTable {columns} rows={transformProject()} title="Websites" />

<style lang="scss">
</style>
