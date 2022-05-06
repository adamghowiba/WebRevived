<script lang="ts">
	import Footer from '$lib/components/global/Footer.svelte';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import { ScrollTrigger } from '$lib/gsap';
	import { onMount } from 'svelte';
	// TODO Smooth scrolling

	onMount(() => {
		ScrollTrigger.refresh();
	});
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
