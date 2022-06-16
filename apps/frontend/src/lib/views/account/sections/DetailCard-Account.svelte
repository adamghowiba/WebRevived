<script lang="ts">
	import CardBase from '$lib/components/global/CardBase.svelte';
	import EditInputWrap from '$lib/components/global/EditInputWrap.svelte';
	import EditableInput from '$lib/components/inputs/editable/EditableInput.svelte';
	import type { Account } from '$lib/types/account';
	import * as yup from 'yup';
	
	export let accountData: Account;

	const accountSchema = yup.object({
		name: yup.string()
	});
</script>

<CardBase>
	<div class="details">
		<EditInputWrap validationSchema={accountSchema}>
			<EditableInput label="Account Name" inputKey="name" value={accountData.name} on:save />
			<EditableInput label="Phone" inputKey="phone" value={accountData.phone} on:save />
			<EditableInput label="Industry" inputKey="industry" value={accountData.industry} on:save />
		</EditInputWrap>
	</div>
</CardBase>

<style lang="scss">
	.details {
		display: grid;
		grid-template-columns: auto auto;
	}
</style>
