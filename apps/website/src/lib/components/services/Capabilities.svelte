<script lang="ts">
	import ArticleContent from '../global/ArticleContent.svelte';

	export let title: string = 'Capabilities';
	export let listItems: string[];
</script>

<section class="container section">
	<ArticleContent {title} sectioned={false}>
		<slot />
	</ArticleContent>

	<div class="items">
		{#each listItems as item}
			<span>{item}</span>
		{/each}
	</div>
</section>

<style lang="scss">
	.items {
		display: grid;
		grid-template-rows: repeat(3, 1fr);
		grid-auto-flow: column;
		margin-top: var(--space-lg);
		font-size: var(--text-h5);
		gap: var(--space-xs);

		span {
			display: flex;
			align-items: center;
			gap: var(--space-xs);
            font-weight: 500;
            color: var(--color-off-white);
        }

		span::before {
			content: '';
			display: block;
			width: var(--space-2xs);
			height: 2px;
			background-color: var(--color-gray-100);
		}
	}
</style>
