<script lang="ts">
	import CardBase from '$lib/components/global/CardBase.svelte';
	import Surface from '$lib/components/global/Surface.svelte';
	import TextInput from '$lib/components/inputs/TextInput.svelte';
</script>

<section class="container">
	<CardBase>
		<div class="heading">
			<h1>This is a heading 1</h1>
			<h2>This is a heading 2</h2>
			<h3>This is a heading 3</h3>
			<h4>This is a heading 4</h4>
			<h5>This is a heading 5</h5>
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, porro!</p>
		</div>
	</CardBase>

	<CardBase>
		<div class="inputs">
			<TextInput value="" label="Username" placeholder="Input Placeholder" />
			<TextInput value="" label="No Place Holder" />
			<TextInput value="Well, how'd you become king then?" label="Disabled" isDisabled />
			<TextInput value="Well, she turned me into a newt?" label="Readonly" isReadonly />
			<TextInput
				value="Well, she turned me into a newt?"
				label="Error"
				state="error"
				icon={{ color: 'red' }}
			/>
			<TextInput
				value="Well, she turned me into a newt?"
				label="Sucess"
				state="success"
				icon={{ location: 'right', isClickable: true }}
			/>
		</div>
	</CardBase>
</section>

<style lang="scss">
	h1 {
		color: #5c60f5;
	}
	h2 {
		color: #6875d9;
	}
	.heading {
		display: flex;
		flex-direction: column;
	}
	.inputs {
		display: flex;
		flex-direction: column;
		width: 50%;
		gap: var(--space-md);
	}
	section {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding-top: var(--space-sm);
		padding-bottom: var(--space-sm);
		gap: 2rem;
	}
</style>
