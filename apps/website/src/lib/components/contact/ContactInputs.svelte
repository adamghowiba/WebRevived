<script lang="ts">
	import TextArea from '../global/TextArea.svelte';
	import TextInput from '../global/TextInput.svelte';
</script>

<div class="section--sm container">
	<h3>More About You</h3>

	<div class="text-inputs">
		<TextInput placeholder="First Name" type="text" name="first_name" value="" />
		<TextInput placeholder="Last Name" type="text" name="first_name" value="" />
		<TextInput placeholder="Email" type="text" name="first_name" value="" />
		<TextInput placeholder="Phone" type="text" name="first_name" value="" />
		<TextInput placeholder="Company" type="text" name="first_name" value="" />
	</div>

	<TextArea value="" />
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}
	.text-inputs {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--space-md);
	}

	h3 {
		margin-left: 8px;
		margin-bottom: var(--space-md);
		color: var(--color-off-white);
	}

	/* Mobile Middle */
	@media only screen and (max-width: 597px) {
		.text-inputs {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
