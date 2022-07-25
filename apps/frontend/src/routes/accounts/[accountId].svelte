<script lang="ts" context="module">
	export const load: Load = async ({ fetch, params }) => {
		const accountId = params.accountId;

		return {
			props: {
				accountId
			}
		};
	};
</script>

<script lang="ts">
	import accountApi from '$lib/api/account-api';
	import ContactBlock from '$lib/components/releated-list/ContactBlock.svelte';
	import ReleatedList from '$lib/components/releated-list/ReleatedList.svelte';
	import { HOST } from '$lib/constants/config';
	import { isLoading } from '$lib/utils/store-utils';
	import BusinessCard from '$lib/views/account/sections/BusinessCard-Account.svelte';
	import DetailCard from '$lib/views/account/sections/DetailCard-Account.svelte';
	import TeamMembersAccount from '$lib/views/account/sections/Representatives-Account.svelte';
	import WebsitesAccount from '$lib/views/account/sections/Websites-account.svelte';
	import ProjectRelatedList from '$lib/views/contact/ProjectRelatedList.svelte';
	import TeamRelatedList from '$lib/views/contact/TeamRelatedList.svelte';
	import type { Load } from '@sveltejs/kit';
	import { useQuery } from '@sveltestack/svelte-query';

	export let accountId: number;

	const accountData = useQuery('accountData', async () => {
		return await accountApi.getAccountByID(accountId, {
			projects: true,
			users: true,
			websites: true,
			contacts: true
		});
	});

	const modals = {
		user: {
			isOpen: false,
			isLoading: false
		}
	};

	const handleUpdateData = async (event: { detail: { inputKey: string; value: string } }) => {
		const { inputKey, value } = event.detail;

		const result = await accountApi.putAccount(accountId, { [inputKey]: value });
	};

	const saveAssignedProject = async ({ detail }: { detail: number[] }) => {
		const result = await accountApi.putAccount(accountId, { projects: detail });
		console.debug(result);
	};

	const saveAssignedUsers = async ({ detail }: { detail: number[] }) => {
		const updated = await accountApi.putAccount(accountId, { users: detail });
		$accountData.refetch();
	};

	const refreshData = () => {
		$accountData.refetch();

		$accountData.data = $accountData.data;
	};
</script>

<main class="container">
	<button on:click={refreshData}>Refretch</button>
	{#if $accountData.isLoading}
		<h2>Loading..</h2>
	{:else if $accountData.isSuccess}
		<BusinessCard cardData={{ ...$accountData.data }} {accountId} />

		<DetailCard accountData={$accountData.data} on:save={handleUpdateData} />

		<ReleatedList title="Contacts" isEmpty={!$accountData.data.contacts?.length}>
			<div class="contacts">
				{#each $accountData.data.contacts as contact}
					<ContactBlock name="{contact.first_name} {contact.last_name}" email={contact.email} />
				{/each}
			</div>
		</ReleatedList>

		<ProjectRelatedList projects={$accountData.data.projects} on:save={saveAssignedProject} />

		<WebsitesAccount {accountId} websites={$accountData.data.websites} />

		<TeamMembersAccount {accountId} representatives={$accountData.data.users} />

		<TeamRelatedList
			users={$accountData.data.users}
			on:save={saveAssignedUsers}
			isAssignModalOpen={modals.user.isOpen}
			isLoading={modals.user.isLoading}
		/>
	{/if}
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
