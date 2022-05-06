<script lang="ts">
	import Footer from '$lib/components/global/Footer.svelte';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	// TODO Smooth scrolling
</script>

<Navbar />
<slot />
<section>
	<Footer />
</section>

<style>
	section {
		overflow: hidden;
	}
</style>
