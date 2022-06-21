<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import DataTable from '$lib/components/datatable/DataTable.svelte';
	import CardBase from '$lib/components/global/CardBase.svelte';
	import PageHeader from '$lib/components/global/PageHeader.svelte';
	import AccountModal from '$lib/components/modal/modals/AccountModal.svelte';
	import DataTableSkeleton from '$lib/components/skeleton/DataTableSkeleton.svelte';
	import { accountStore } from '$lib/stores/api/account-store';
	import type { Account } from '$lib/types/account';
	import type { DataTableCol } from '$lib/types/table';

	let isNewAccountModalOpen = false;

	let columns: DataTableCol[] = [
		{ feild: 'id', headerName: 'ID' },
		{ feild: 'name', headerName: 'Name' },
		{ feild: 'phone', headerName: 'Phone' },
		{ feild: 'industry', headerName: 'Industry' },
		{ feild: 'street', headerName: 'Street' },
		{ feild: 'state', headerName: 'State' },
		{ feild: 'code', headerName: 'Code' }
	];

	const { state } = accountStore;

	const transformAccountData = (accounts: Account[]) => {
		return accounts.map((account) => ({
			...account,
			name: { link: `/accounts/${account.id}`, name: account.name }
		}));
	};
</script>

<section class="container">
	<header>
		<PageHeader title="Accounts" subtitle="overview" />

		<Button on:click={() => (isNewAccountModalOpen = true)}>Add Account</Button>
	</header>

	<div class="accounts">
		{#if $state === 'idle'}
			<DataTableSkeleton />
		{:else if $state === 'success'}
			<CardBase padding="0px">
				<DataTable
					{columns}
					selectable
					disableSelectionOnClick
					rows={transformAccountData($accountStore.data)}
				/>
			</CardBase>
		{/if}
	</div>
</section>

{#if isNewAccountModalOpen}
	<AccountModal
		on:exit={() => (isNewAccountModalOpen = false)}
		on:clickOutside={() => (isNewAccountModalOpen = false)}
	/>
{/if}

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.accounts {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 0 auto;
		width: 100%;
	}
</style>
