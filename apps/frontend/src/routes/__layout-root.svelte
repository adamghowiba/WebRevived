<script lang="ts">
	import '$lib/styles/reset.css';
	import '$lib/styles/root.css';
	import '$lib/styles/global.css';
	import { themeStore } from '$lib/stores/theme-store';
</script>

<main class="theme--{$themeStore}">
	<slot />
</main>

<style lang="scss">
	main {
		width: 100%;
		height: 100%;
		background-color: var(--color-background);
	}
</style>
