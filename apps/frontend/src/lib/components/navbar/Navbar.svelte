<script lang="ts">
	import { themeStore } from '$lib/stores/theme-store';

	const changeTheme = () => {
		$themeStore = $themeStore === 'dark' ? 'light' : 'dark';
	};
</script>

<nav>
	<button on:click={changeTheme}> Change Theme </button>
</nav>

<style lang="scss">
</style>
