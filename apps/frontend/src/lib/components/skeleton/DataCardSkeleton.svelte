<script lang="ts">
	import CardBase from '../global/CardBase.svelte';
	import Skeleton from './Skeleton.svelte';
</script>

<CardBase>
	<div class="card">
		<header>
			<div class="info">
				<Skeleton height="12px" width='6rem' />
				<Skeleton height="12px" width='4rem' />
			</div>

			<Skeleton height="12px" width="3rem" />
		</header>
	</div>
</CardBase>

<style lang="scss">
	.card {
		background-color: var(--color-surface);
	}

	header {
		display: flex;
		justify-content: space-between;
		gap: var(--space-2xs);
	}

	.info {
		display: flex;
		flex-direction: column;
		gap: var(--space-2xs);
	}
</style>
