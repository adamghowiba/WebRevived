<script lang="ts">
	import accountApi from '$lib/api/account-api';
	import Button from '$lib/components/button/Button.svelte';
	import DataTable from '$lib/components/datatable/DataTable.svelte';
	import AssignModal from '$lib/components/modal/modals/AssignModal.svelte';
	import RelatedTable from '$lib/components/releated-list/Related-Table.svelte';
	import { websiteStore } from '$lib/stores/api/website-store';
	import type { DataTableCol, DataTableRowLink } from '$lib/types/table';
	import type { Website } from '@webrevived/types/prisma';

	export let websites: Website[];
	export let accountId: number;
	export let isAssignModalSaving: boolean = false;

	let isAssignWebsiteModalOpen: boolean = false;

	const columns: DataTableCol[] = [
		{ feild: 'id', headerName: 'id' },
		{ feild: 'url', headerName: 'URL' }
	];

	const filterPresentWebsites = (sites: Website[]) => {
		const usedWebsiteIds = websites.map((_website) => _website.id);
		const filteredSites = sites.filter((_website) => !usedWebsiteIds.includes(_website.id));

		return filteredSites;
	};

	const handleAssignSave = async (event: { detail: number[] }) => {
		isAssignModalSaving = true;
		await accountApi.putAccount(accountId, { websites: event.detail });
		
		isAssignModalSaving = false;
		isAssignWebsiteModalOpen = false;
	};

	/**
	 * Add a href to the project name,
	 */
	const transformWebsiteRow = (
		_websites: Website[]
	): Omit<Website, 'url'>[] & { url: DataTableRowLink }[] => {
		return _websites.map((website) => ({ ...website, url: { link: `#`, name: website.url } }));
	};
</script>

<RelatedTable {columns} rows={transformWebsiteRow(websites)} title="Websites">
	<div class="actions" slot="actions">
		<Button size="xs" color="default" on:click={() => (isAssignWebsiteModalOpen = true)}>
			Assign
		</Button>
	</div>
</RelatedTable>

{#if isAssignWebsiteModalOpen}
	<AssignModal
		title="Assign Website"
		{columns}
		dataRows={filterPresentWebsites($websiteStore.data)}
		isLoading={isAssignModalSaving}
		on:exit={() => (isAssignWebsiteModalOpen = false)}
		on:save={handleAssignSave}
	/>
{/if}

<style lang="scss">
</style>
