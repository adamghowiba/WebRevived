<script lang="ts">
	export let title: string;
	export let desc: string;
	export let button: { text: string; href: string };
</script>

<article>
	<h1>{title}</h1>
	<p>{desc}</p>
</article>

<style lang="scss">
	article {
		max-width: 45ch;
		display: flex;
		gap: var(--space-lg);
		flex-direction: column;

		p {
			line-height: var(--line-md);
		}
	}

	/* Laptop */
	@media screen and (max-width: 1024px) {
		article {
			max-width: 65ch;
		}
	}
</style>
