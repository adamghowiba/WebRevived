<script lang="ts">
	import DataCard from '$lib/components/global/DataCard.svelte';
	import DataCardSkeleton from '$lib/components/skeleton/DataCardSkeleton.svelte';
	import { asyncProjectStore } from '$lib/stores/api/project-store';
</script>

<div class="row">
	<DataCard title="sales" dataSum="75%" />
	<DataCard title="revenue" dataSum="$2,500" />
	<DataCard title="new clients" dataSum="12" />
	<DataCard title="projects" dataSum={$asyncProjectStore.data.length} />
</div>

<style lang="scss">
	.row {
		display: flex;
		justify-content: space-between;
		gap: var(--space-sm);
	}
</style>
