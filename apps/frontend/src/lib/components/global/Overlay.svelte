<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<div class="overlay" transition:fade={{duration: 250}} />

<style lang="scss">
	.overlay {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.158);
		backdrop-filter: blur(2px);
		top: 0;
		left: 0;
	}
</style>
