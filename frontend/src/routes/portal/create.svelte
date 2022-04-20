<script lang="ts">
	import { onMount } from 'svelte';
	onMount(() => {
		const searchParams = new URLSearchParams(window.location.search);
		const token = searchParams.get('token');

		console.log(token);
	});
</script>

<section>
	<form>
		<h3>Enter password</h3>
		<p>Crete your portal account by confirming the password you want to use</p>
		<input type="text" name="password" />
		<input type="text" name="password" />
		<button>Submit</button>
	</form>
</section>

<style lang="scss">
	section {
		width: 100%;
		height: 100%;
		display: grid;
		place-items: center;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
		border-radius: 6px;
		background-color: #2b343b;
	}
	input {
		padding: 6px;
	}
	button {
		padding: 10px 20px;
		border-radius: 4px;
		color: white;
		font-weight: bold;
		display: inline-flex;
		appearance: none;
		border: none;
		outline: none;
		background-color: darkorchid;
		width: min-content;
	}
</style>
