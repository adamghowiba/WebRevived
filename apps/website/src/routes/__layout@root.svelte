<script lang="ts">
	import Footer from '$lib/components/global/Footer.svelte';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import { onMount } from 'svelte';
	import { ScrollTrigger } from '$lib/gsap';
	import MobileNavbar from '$lib/components/navbar/MobileNavbar.svelte';
	import { afterNavigate } from '$app/navigation';
import NewFooter from '$lib/components/global/NewFooter.svelte';
	// TODO Smooth scrolling

	let isMobileNavbarOpen: boolean = false;

	onMount(() => {
		document.fonts.onloadingdone = () => {
			console.debug('Font faces have loaded');
			ScrollTrigger.refresh();
		};
	});

	afterNavigate(() => {
		if (isMobileNavbarOpen) isMobileNavbarOpen = false;
	});
</script>

<svelte:body />

<Navbar bind:isMobileNavbarOpen />
<div class="mobile-navbar">
	{#if isMobileNavbarOpen}
		<MobileNavbar on:scrollAway={() => isMobileNavbarOpen = false} />
	{/if}
</div>

<div class="body" class:noScroll={isMobileNavbarOpen}>
	<slot />
	<section>
		<NewFooter />
	</section>
</div>

<style lang="scss">
	section {
		overflow: hidden;
	}
	.body {
		height: 100%;

		&.noScroll {
			overflow: hidden;
		}
	}
	.mobile-navbar {
		display: none;
	}
	@media screen and (max-width: 768px) {
		.mobile-navbar {
			display: block;
		}
	}
</style>
