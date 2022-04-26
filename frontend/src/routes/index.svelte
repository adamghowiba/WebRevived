<script lang="ts">
	import Button from 'wds/Button.svelte';
	import Header from 'wds/Header.svelte';
	let responseText: string = '';
</script>

<section>
	<h2>Web Revived Home Page</h2>
	<h4>You should be authed already.</h4>
</section>

<style lang="scss">
	section {
		display: flex;
		gap: 1rem;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}
</style>
