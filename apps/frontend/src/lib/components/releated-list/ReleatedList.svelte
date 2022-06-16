<script lang="ts">
	import Button from '../button/Button.svelte';
	import CardBase from '../global/CardBase.svelte';

	export let title: string;
	export let isEmpty: boolean = false;
</script>

<CardBase padding="0px">
	<div class="related">
		<header class="header">
			<h5>{title}</h5>

			<div class="actions">
				<slot name="actions" />
			</div>
		</header>

		{#if isEmpty}
			<div class="empty">
				<slot name="empty">
					<p>There are no {title} to show</p>
				</slot>
			</div>
		{:else}
			<div class="body">
				<slot />
			</div>
		{/if}
	</div>
</CardBase>

<style lang="scss">
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--space-xs);
		border-bottom: 1px solid var(--color-border);
	}

	.empty {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		width: 100%;
		height: 100%;
		padding: var(--space-md);
	}
	.body {
		width: 100%;
	}
</style>
