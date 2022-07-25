<script lang="ts">
	import accountApi from '$lib/api/account-api';
	import CardBase from '$lib/components/global/CardBase.svelte';
	import EditInputWrap from '$lib/components/global/EditInputWrap.svelte';
	import EditableInput from '$lib/components/inputs/editable/EditableInput.svelte';
	import type { Account } from '@webrevived/types/prisma';
	import * as yup from 'yup';

	export let cardData: Pick<Account, 'name' | 'phone' | 'industry' | 'city'>;
	export let accountId: number;

	const accountSchema = yup.object({
		name: yup.string().min(3)
	});

	const handleUpdateData = async (event: { detail: { inputKey: string; value: string } }) => {
		const { inputKey, value } = event.detail;

		const result = await accountApi.putAccount(accountId, { [inputKey]: value });
	};
</script>

<CardBase padding="var(--space-xs) var(--space-lg)">
	<EditInputWrap validationSchema={accountSchema}>
		<EditableInput
			inputKey="name"
			label="Account Name"
			bind:value={cardData.name}
			on:save={handleUpdateData}
		/>
		<EditableInput inputKey="phone" label="Phone" bind:value={cardData.phone} on:save={handleUpdateData} />
		<EditableInput
			inputKey="industry"
			label="Industry"
			bind:value={cardData.industry}
			on:save={handleUpdateData}
		/>
		<EditableInput inputKey="city" label="City" bind:value={cardData.city} on:save={handleUpdateData} />
	</EditInputWrap>
</CardBase>

<style lang="scss">
</style>
