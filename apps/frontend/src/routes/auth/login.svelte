<script lang="ts">
	import { goto } from '$app/navigation';
	import authApi from '$lib/api/auth-api';
	import Button from '$lib/components/button/Button.svelte';
	import CardBase from '$lib/components/global/CardBase.svelte';
	import TextInput from '$lib/components/inputs/TextInput.svelte';
	import authValidation from '$lib/validation/auth-validation';
	import { validator } from '@felte/validator-yup';
	import { createForm } from 'felte';
	
	let formError: string;

	const { form, isSubmitting, errors } = createForm({
		onSubmit: async (values) => {
			const {response, result} = await authApi.login(values.email, values.password);
			if (!response.ok) throw new Error(result?.message || 'Login failed. Please try again');
		},
		onError: async (error: string) => {
			formError = error;
		},
		onSuccess: () => {
			goto('/');
		},
		extend: validator({ schema: authValidation.loginSchema })
	});
</script>

<main>
	<img class="logo" src="/images/logo.svg" alt="" />

	<section class="login">
		<CardBase padding="var(--space-md)">
			<form class="form" use:form>
				<h5 class="form__title">Login to your account</h5>
				{#if formError}
					<span class="form__error"> {formError}</span>
				{/if}

				<div class="form__inputs">
					<TextInput
						label="Email address"
						placeholder="Enter email"
						name="email"
						value=""
						error={$errors.email?.toString()}
					/>
					<TextInput
						label="Password"
						placeholder="Password"
						name="password"
						value=""
						error={$errors.password?.toString()}
					/>
				</div>
				<Button color="purple" width="fill">
					{#if !$isSubmitting}
						Log in
					{:else}
						Logging In...
					{/if}
				</Button>
			</form>
		</CardBase>
	</section>
</main>

<style lang="scss">
	main {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: var(--space-md);
	}

	.login {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: 450px;
	}

	.form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--space-md);

		&__inputs {
			display: flex;
			flex-direction: column;
			gap: var(--space-sm);
		}

		&__title {
			margin: 0 auto;
			font-size: var(--text-body-lg);
		}

		&__error {
			margin: 0 auto;
			color: var(--color-error);
		}
	}

	.logo {
		max-width: 130px;
	}
</style>
