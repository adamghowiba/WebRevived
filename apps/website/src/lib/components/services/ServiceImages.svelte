<script lang="ts">
	export let images: [string, string];
</script>

<section class="section container">
	<figure>
		{#each images as image}
			<img src={image} alt="Website with hand pointing" />
		{/each}
	</figure>
</section>

<style lang="scss">
	figure {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-lg);
		row-gap: var(--space-6xl);
		margin-bottom: var(--space-5xl);

		img:nth-child(even) {
			position: relative;
			transform: translateY(var(--space-5xl));
		}
	}
</style>
