<script lang="ts" context="module">
	export const load: Load = async ({ fetch, params }) => {
		const accountId = params.accountId;
		const response = await fetch(`${HOST}/account/${accountId}`, {
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
	import type { Account } from '$lib/types/account';
	import BusinessCard from '$lib/views/account/cards/BusinessCard-Account.svelte';
	import DetailCard from '$lib/views/account/cards/DetailCard-Account.svelte';
	import type { Load } from '@sveltejs/kit';

	export let accountData: Account;
	export let accountId: number;

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

	<DetailCard {accountData} on:save={handleUpdateData}/>

	<ReleatedList title="Contacts">
		{#if accountData.contacts?.length}
			<div class="contacts">
				{#each accountData.contacts as contact}
					<ContactBlock name="{contact.first_name} {contact.last_name}" email={contact.email} />
				{/each}
			</div>
		{:else}
			<div class="contact-empty">
				<p>There are no contacts</p>
			</div>
		{/if}
	</ReleatedList>
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
	.contact-empty {
		padding: var(--space-md);
		text-align: center;
	}
</style>
