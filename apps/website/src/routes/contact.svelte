<script lang="ts">
	import Button from '$lib/components/buttons/Button.svelte';
	import ContactInputs from '$lib/components/contact/ContactInputs.svelte';
	import ContactSelect from '$lib/components/contact/ContactSelect.svelte';
	import ContactSection from '$lib/components/global/ContactSection.svelte';
</script>

<header class="section--sm container">
	<h1>Let's build something awesome together. 👋</h1>
</header>

<ContactSelect />

<ContactInputs />

<div class="last-button container">
	<Button width="100%" maxWidth="400px">Submit</Button>
</div>

<style lang="scss">
	h1 {
		max-width: 25ch;
		text-align: center;
		margin: 0 auto;
		line-height: var(--line-sm);
	}
	.last-button {
		margin-bottom: var(--space-section-base);
	}
</style>
