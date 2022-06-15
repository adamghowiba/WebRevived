<script lang="ts" context="module">
	export const load: Load = async ({ fetch, params }) => {
		const accountId = params.accountId;

		const URLParams = new URLSearchParams();
		URLParams.set('projects', 'true');
		URLParams.set('contacts', 'true');
		URLParams.set('website', 'true');
		URLParams.set('users', 'true');

		const URL = `${HOST}/account/${accountId}?${URLParams.toString()}`;
		const response = await fetch(URL, {
			credentials: 'include'
		});

		const accountData = await response.json();

		return {
			props: {
				accountData,
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
	import BusinessCard from '$lib/views/account/sections/BusinessCard-Account.svelte';
	import DetailCard from '$lib/views/account/sections/DetailCard-Account.svelte';
	import ProjectsAccount from '$lib/views/account/sections/Projects-Account.svelte';
	import TeamMembersAccount from '$lib/views/account/sections/Representatives-Account.svelte';
	import WebsitesAccount from '$lib/views/account/sections/Websites-account.svelte';
	import type { Load } from '@sveltejs/kit';
	import type { Account, Contact, Project, Website, User } from 'types/prisma';

	export let accountData: Account & {
		projects: Project[];
		contacts: Contact[];
		website: Website[];
		users: User[];
	};
	export let accountId: number;

	// console.log(accountData);

	const handleUpdateData = async (event: { detail: { inputKey: string; value: string } }) => {
		const { inputKey, value } = event.detail;

		const result = await accountApi.putAccount(accountId, { [inputKey]: value });
	};
</script>

<main class="container">
	<BusinessCard
		accountName={accountData.name}
		city={accountData.city}
		industry={accountData.industry}
		phone={accountData.phone}
		{accountId}
	/>

	<DetailCard {accountData} on:save={handleUpdateData} />

	<ReleatedList title="Contacts" isEmpty={!accountData.contacts?.length}>
		<div class="contacts">
			{#each accountData.contacts as contact}
				<ContactBlock name="{contact.first_name} {contact.last_name}" email={contact.email} />
			{/each}
		</div>
	</ReleatedList>

	<ProjectsAccount projects={accountData.projects} />

	<WebsitesAccount websites={accountData.website} />

	<TeamMembersAccount {accountId} bind:representatives={accountData.users} />
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
