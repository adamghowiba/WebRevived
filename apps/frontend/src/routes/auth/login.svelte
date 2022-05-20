<script lang="ts">
	import authApi from '$lib/api/auth-api';
	import Button from 'wds/Button.svelte';
	import Create from '../portal/create.svelte';

	interface FormState<M = string> {
		state: 'loading' | 'error' | 'sucess' | 'idle';
		data: M;
	}

	const loginData = {
		email: '',
		password: ''
	};

	let formState: FormState<unknown> = { state: 'idle', data: null };

	const handleFormSubmit = async (event: SubmitEvent) => {
		formState.state = 'loading';
		try {
			const { response, result } = await authApi.login(loginData.email, loginData.password);

			if (!response.ok) return (formState = { state: 'error', data: result.message });

			formState = { state: 'sucess', data: result };
		} catch {
			formState = { state: 'error', data: 'Failed to login. Try again.' };
		}
	};
</script>

<section class="login">
	<form class="form" on:submit|preventDefault={handleFormSubmit}>
		<header>
			<h4>Login To WebRevived Core</h4>
			<p>Manage client data across the enite scope of the company.</p>
		</header>

		{#if formState.state === 'error'}
			<span class="error">{formState.data}</span>
		{/if}

		{#if formState.state === 'sucess'}
			<span class="sucess">Login sucessful</span>
		{/if}

		<div class="form__inputs">
			<input bind:value={loginData.email} type="text" name="email" placeholder="Email" />
			<input bind:value={loginData.password} type="text" name="email" placeholder="Password" />
		</div>

		<button>
			{#if formState.state === 'loading'}
				Loading...
			{:else}
				Login
			{/if}
		</button>
	</form>
</section>

<style lang="scss">
	.login {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		height: 100%;
		flex-direction: column;

		h4 {
			text-transform: uppercase;
		}
	}
	.error {
		color: rgb(235, 69, 69);
	}
	.sucess {
		color: rgb(79, 233, 118);
	}

	p {
		color: rgba(255, 255, 255, 0.603);
		font-size: 14px;
	}

	button {
		appearance: none;
		background-color: #9c59df;
		font-size: 14px;
		font-weight: 600;
		padding: 12px;
		border-radius: 6px;
		color: white;
		border: none;
		outline: none;
	}

	.form {
		width: 100%;
		max-width: 300px;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		gap: 1rem;

		&__inputs {
			display: flex;
			flex-direction: column;
			gap: 12px;
			width: 100%;
		}
	}

	input {
		appearance: none;
		border: none;
		background-color: transparent;
		outline: none;
		border: 1px solid rgba(255, 255, 255, 0.459);
		border-radius: 5px;
		padding: 16px 12px;
		width: 100%;
		font-size: 12px;
		color: white;
	}
</style>
