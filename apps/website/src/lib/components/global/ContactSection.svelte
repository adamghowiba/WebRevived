<script lang="ts">
	export let title: string = 'Keep up with the latest and greatest in digital marketing 📖';
	export let subtitle: string =
		'Sign up for our newsletter, a biweekly digest from our digital experts.';
</script>

<section class="section container">
	<header>
		<h2>{title}</h2>
		<p>{subtitle}</p>
	</header>
</section>

<style lang="scss">
	section {
		max-width: 75ch;
		text-align: center;
	}
	header {
        display: flex;
		flex-direction: column;
		gap: var(--space-md);
        align-items: center;
    }
	h1 {
        font-weight: var(--fw-bold);
	}
	p {
		color: var(--text-base-color);
		font-size: 18px;
        max-width: 40ch;
	}
</style>
