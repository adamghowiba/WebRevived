<script lang="ts">
	export let pageName: string;
	export let title: string;
	export let subtitle: string;
</script>

<section class="section container">
	<h1>{pageName}</h1>

	<div class="content">
		<h2>{title}</h2>
		<p>{subtitle}</p>
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-lg);
	}

	.content {
		display: flex;
		gap: var(--space-xs);
		flex-direction: column;
		max-width: 50ch;
	}

	@media screen and (max-width: 768px) {
		section {
			flex-direction: column;
            text-align: center;
            gap: var(--space-md);
		}
        p {
            display: none;
        }
	}
</style>
