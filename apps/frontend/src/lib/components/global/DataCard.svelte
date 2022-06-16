<script lang="ts">
	import DataCardSkeleton from '../skeleton/DataCardSkeleton.svelte';
	import CardBase from './CardBase.svelte';

	export let title: string;
	export let dataSum: string | number;
</script>

{#if dataSum}
	<CardBase>
		<header>
			<div class="info">
				<h6 class="info__title">{title}</h6>
				<h6 class="info__data-title">{dataSum}</h6>
			</div>

			<span>Last 7 days</span>
		</header>
	</CardBase>
{:else}
	<DataCardSkeleton />
{/if}

<style lang="scss">
	.card {
		width: 100%;
		background-color: var(--color-surface);
	}

	header {
		display: flex;
		justify-content: space-between;

		span {
			font-size: var(--text-sm);
			color: var(--color-gray-600);
		}
	}

	.info {
		display: flex;
		flex-direction: column;
		gap: var(--space-3xs);

		&__title {
			font-size: var(--text-xs);
			text-transform: uppercase;
			color: var(--color-gray-600);
		}

		&__data-title {
			font-weight: var(--fw-medium);
			font-size: var(--text-h4);
		}
	}
</style>
