<script lang="ts">
	import { tabs } from '$lib/stores/tabs-store';

    export let currentTab = null;
</script>

<div class="tabs">
	{#each $tabs || [] as tab}
		<button class="tab" on:click={() => currentTab = tab.name}>{tab.name}</button>
	{/each}
</div>

<style lang="scss">
	.tabs {
		display: flex;
		margin: 2rem 1rem;
        gap: 1rem;
    }
	button {
		color: white;
	}
	.tab {
		background-color: gray;
		padding: 10px;
	}
</style>
