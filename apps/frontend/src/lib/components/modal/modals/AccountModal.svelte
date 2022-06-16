<script lang="ts">
	import userApi from '$lib/api/user-api';
	import Hr from '$lib/components/global/Hr.svelte';
	import TextInput from '$lib/components/inputs/TextInput.svelte';
	import { accountStore } from '$lib/stores/api/account-store';
	import type { Account } from '$lib/types/account';
	import type { DropdownItems } from '$lib/types/dropdown';
	import { hasValidationErrors } from '$lib/utils/validation-utils';
	import { accountSchema } from '$lib/validation/account-validation';
	import { validator } from '@felte/validator-yup';
	import { createForm } from 'felte';
	import Modal from '../Modal.svelte';
	import ModalFooter from '../ModalFooter.svelte';
	import ModalHeader from '../ModalHeader.svelte';
	
	let userItems = [];
	let accountData: Partial<Account> = {};
	let formElement: HTMLFormElement;

	const fetchUsers = async () => {
		const userResult = await userApi.getUsers();

		let transformedUser: DropdownItems[] = userResult.map((user) => ({
			name: `${user.first_name} ${user.last_name.substring(0, 1)}.`,
			value: user.id
		}));

		userItems = transformedUser;
	};

	const handleFormSubmit = async (values) => {
		console.log('Saving account', accountData);
		const result = await accountStore.addAccount(accountData);

		console.log(result);
	};

	const { form, errors, touched, isSubmitting, isValid } = createForm({
		onSubmit: handleFormSubmit,
		extend: validator({ schema: accountSchema }),
		onError: (error) => {
			console.log('Error');
		}
	});
</script>

<Modal title="New Account" width="700px" on:clickOutside>
	<ModalHeader slot="header" title="New Account" on:exit />

	<form class="modal-body" use:form>
		<TextInput
			name="name"
			bind:value={accountData.name}
			label="Name"
			isRequired
			placeholder="Account name"
			error={$errors.name}
		/>
		<TextInput
			name="industry"
			bind:value={accountData.industry}
			label="Industry"
			placeholder="Account industry"
			error={$errors.industry}
		/>
		<TextInput
			name="phone"
			bind:value={accountData.phone}
			label="Phone"
			placeholder="Account number"
			error={$errors.phone}
		/>

		<Hr />

		<div class="address">
			<TextInput name="street" bind:value={accountData.street} label="Street" />
			<TextInput name="city" bind:value={accountData.city} label="City" />
			<TextInput name="state" bind:value={accountData.state} label="State" />
			<TextInput name="code" bind:value={accountData.code} label="Zip" />
		</div>

		<ModalFooter
			on:exit
			attached
			saveDisabled={hasValidationErrors($errors)}
			isLoading={$isSubmitting}
		/>
	</form>
</Modal>

<style>
	.modal-body {
		padding: var(--space-xs);
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}
	.address {
		display: grid;
		gap: var(--space-xs);
		grid-template-columns: 1fr 1fr;
	}
</style>
