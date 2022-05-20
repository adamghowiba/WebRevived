<script lang="ts">
	import Button from '../buttons/Button.svelte';
	import TextInput from './TextInput.svelte';

	export let title: string = 'Keep up with the latest and greatest in digital marketing 📖';
	export let subtitle: string =
		'Sign up for our newsletter, a biweekly digest from our digital experts.';

	let value: string = '';
</script>

<section class="section container">
	<h2>{title}</h2>
	<p>{subtitle}</p>

	<form>
		<TextInput
			type="email"
			placeholder="Email"
			name="email"
			bind:value
			maxWidth="350px"
			required
			hoverEffect={false}
		/>
		<Button>Submit</Button>
	</form>
</section>

<style lang="scss">
	section {
		max-width: 75ch;
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
		align-items: center;
	}
	form {
		display: flex;
		justify-content: center;
		width: 100%;
	}
	p {
		color: var(--text-base-color);
		font-size: 18px;
		max-width: 40ch;
	}
</style>
