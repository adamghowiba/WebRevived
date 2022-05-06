<script lang="ts">
	import Footer from '$lib/components/global/Footer.svelte';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import { onMount } from 'svelte';
	import {ScrollTrigger} from '$lib/gsap';
	// TODO Smooth scrolling

	onMount(() => {
		document.fonts.onloadingdone = function (fontFaceSetEven) {
			console.debug('Font faces have loaded');
			ScrollTrigger.refresh();
		};
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
