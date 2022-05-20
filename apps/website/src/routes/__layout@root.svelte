<script lang="ts">
	import { afterNavigate, beforeNavigate, goto } from '$app/navigation';
	import NewFooter from '$lib/components/global/NewFooter.svelte';
	import MobileNavbar from '$lib/components/navbar/MobileNavbar.svelte';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import { ScrollTrigger } from '$lib/gsap';
	import { onMount } from 'svelte';
	import { gsap } from '$lib/gsap';
	// TODO Smooth scrolling

	let navbarElement: HTMLElement;
	let isMobileNavbarOpen: boolean = false;
	let navbarVisible: boolean = true;
	let lastScrollY = 0;

	let loadingElement: HTMLElement;

	let _loadingAnimation: {
		inAnimation: gsap.core.Timeline;
		outAnimation: gsap.core.Timeline;
		destory: () => void;
	};
	let loadingAnimationPlayed: boolean;

	const handleScroll = () => {
		const scrollTop = window.scrollY;

		if (lastScrollY > scrollTop && !navbarVisible) {
			navbarVisible = true;
			navbarElement.style.transform = `translateY(0px)`;
			return;
		}

		if (lastScrollY < scrollTop && navbarVisible) {
			navbarVisible = false;
			navbarElement.style.transform = `translateY(-100%)`;
			return;
		}

		lastScrollY = scrollTop;
	};

	const loadingAnimation = () => {
		const loadingScreens = loadingElement.querySelectorAll('.loading__overlay');

		const inAnimation = gsap.timeline({ paused: true });
		const outAnimation = gsap.timeline({ paused: true });

		inAnimation.to(loadingScreens, {
			height: '100%',
			stagger: 0.15,
			top: 0,
			bottom: 'unset',
			duration: 0.45
		});

		outAnimation.set(loadingScreens, {
			top: 'unset',
			bottom: 0
		});
		outAnimation.from([loadingScreens[1], loadingScreens[0]], {
			height: '100%',
			stagger: 0.15,
			duration: 0.45
		});

		const destory = () => {
			inAnimation.kill();
			outAnimation.kill();
		};

		return { inAnimation, outAnimation, destory };
	};

	beforeNavigate((navigation) => {
		if (!loadingAnimationPlayed) {
			_loadingAnimation.inAnimation.play(0);
			navigation.cancel();
		}

		const crossOrgin = navigation.from.origin != navigation.to?.origin;

		loadingAnimationPlayed = true;

		_loadingAnimation.inAnimation.eventCallback('onComplete', () => {
			goto((crossOrgin ? navigation.to?.origin : navigation.to?.pathname) || '/');
		});
	});

	afterNavigate((navigation) => {
		_loadingAnimation.outAnimation.play(0);
		loadingAnimationPlayed = false;
	});

	onMount(() => {
		document.addEventListener('scroll', handleScroll, { passive: true });
		_loadingAnimation = loadingAnimation();

		document.fonts.onloadingdone = () => {
			console.debug('Font faces have loaded');
			ScrollTrigger.refresh();
		};

		return () => {
			document.removeEventListener('scroll', handleScroll);
			_loadingAnimation.destory();
		};
	});

	afterNavigate(() => {
		if (isMobileNavbarOpen) isMobileNavbarOpen = false;
	});
</script>

<div class="loading" bind:this={loadingElement}>
	<div class="loading__overlay" />
	<div class="loading__overlay loading__overlay--red" />
</div>

<div class="navbar-wrap" bind:this={navbarElement}>
	<Navbar bind:isMobileNavbarOpen />
</div>

<div class="mobile-navbar">
	{#if isMobileNavbarOpen}
		<MobileNavbar on:scrollAway={() => (isMobileNavbarOpen = false)} />
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
	.loading {
		&__overlay {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 1000;
			height: 0;
			width: 100%;
			background-color: var(--color-primary);
		}

		&__overlay--red {
			background-color: var(--color-red);
		}
	}
	.navbar-wrap {
		height: 108px;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 100;

		transition: transform 0.25s ease-in-out;
	}
	.body {
		height: 100%;
		margin-top: 108px;

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
