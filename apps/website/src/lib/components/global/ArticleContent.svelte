<script lang="ts">
	export let title: string;
	export let sectioned: boolean = true;
</script>

<article class:container={sectioned} class:section={sectioned}>
	<h2>{title}</h2>

	<slot />
</article>

<style lang="scss">
	article {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);

		:global(p) {
			/* Inherted from global class body--xl */
			font-size: var(--text-h4);
			line-height: var(--line-md);
			font-weight: 500;
			color: var(--color-off-white);
			font-weight: 400;
		}
	}

	@media screen and (max-width: 597px) {
		article {
			:global(p) {
				font-size: var(--text-h5);
			}
		}
	}
</style>
