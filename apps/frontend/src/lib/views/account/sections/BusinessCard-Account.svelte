<script lang="ts">
	import accountApi from '$lib/api/account-api';
	import CardBase from '$lib/components/global/CardBase.svelte';
	import EditInputWrap from '$lib/components/global/EditInputWrap.svelte';
	import EditableInput from '$lib/components/inputs/editable/EditableInput.svelte';
	import * as yup from 'yup';

	export let accountName: string;
	export let phone: string;
	export let industry: string;
	export let city: string;
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
			value={accountName}
			on:save={handleUpdateData}
		/>
		<EditableInput inputKey="phone" label="Phone" value={phone} on:save={handleUpdateData} />
		<EditableInput
			inputKey="industry"
			label="Industry"
			value={industry}
			on:save={handleUpdateData}
		/>
		<EditableInput inputKey="city" label="City" value={city} on:save={handleUpdateData} />
	</EditInputWrap>
</CardBase>

<style lang="scss">
</style>
