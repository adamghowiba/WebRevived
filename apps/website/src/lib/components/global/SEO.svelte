<script lang="ts">
	export let title: string;
	export let metaDescription: string;
	export let robots: { index: boolean; follow: boolean } = { follow: true, index: true };
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={metaDescription} />
	<meta
		name="robots"
		content="{robots.index ? 'index' : 'noindex'}{robots.follow ? ',follow' : ',nofollow'}"
	/>
</svelte:head>
