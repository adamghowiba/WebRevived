<script lang="ts" context="module">
	export const load: Load = async ({ fetch, params }) => {
		const contactId = +params.contactId;
		const contactData = await contactApi.getContactById(contactId, { projects: true });

		return {
			props: {
				contactData,
				contactId
			}
		};
	};
</script>

<script lang="ts">
	import contactApi from '$lib/api/contact-api';
	import BusinessCardAccount from '$lib/views/account/sections/BusinessCard-Account.svelte';
	import ProjectRelatedList from '$lib/views/contact/ProjectRelatedList.svelte';
	import type { Load } from '@sveltejs/kit';
	import { useQuery } from '@sveltestack/svelte-query';

	export let contactId: number;
	const queryResult = useQuery('contactData', async () => {
		return await contactApi.getContactById(contactId, { projects: true });
	});

	const assignModals = {
		project: {
			isLoading: false,
			isOpen: false
		}
	};

	const saveAssignedProject = async ({ detail }: { detail: number[] }) => {
		assignModals.project.isLoading = true;
		await contactApi.putContact(contactId, { projects: detail });
		assignModals.project.isOpen = false;
		$queryResult.refetch();
	};
</script>

<main class="container">
	{#if $queryResult.isLoading}
		<h5>Loading...</h5>
	{:else if $queryResult.isSuccess}
		{#key $queryResult.isFetching}
			<!-- <BusinessCardAccount
				bind:cardData={$queryResult.data}
				accountId={contactId}
			/> -->

			<ProjectRelatedList
				projects={$queryResult.data.projects}
				isAssignModalOpen={assignModals.project.isOpen}
				isLoading={assignModals.project.isLoading}
				on:save={saveAssignedProject}
			/>
		{/key}
	{/if}

	<!-- <DetailCard {accountData} on:save={handleUpdateData} />
			
			<ProjectsAccount projects={accountData.projects} />
			
			<TeamMembersAccount {accountId} bind:representatives={accountData.users} /> -->
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		padding-top: var(--space-xs);
		padding-bottom: var(--space-xs);
		gap: var(--space-sm);
	}

	.contacts {
		display: flex;
		flex-wrap: wrap;
		height: 100%;
		align-items: center;
		gap: var(--space-lg);
		padding: var(--space-xs);
	}
</style>
