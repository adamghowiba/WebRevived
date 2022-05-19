<script lang="ts">
	import CallToAction from '$lib/components/global/CallToAction.svelte';
	import ContactSection from '$lib/components/global/ContactSection.svelte';
	import HeaderImage from '$lib/components/global/HeaderImage.svelte';
	import LocalIcon from '$lib/components/global/LocalIcon.svelte';
	import CtaBlock from '$lib/components/index/CtaBlock.svelte';
	import CtaNew from '$lib/components/index/CtaNew.svelte';
	import Hero from '$lib/components/index/Hero.svelte';
	import IndexServices from '$lib/components/index/IndexServices.svelte';
	import TextScroll from '$lib/components/index/TextScroll.svelte';
	import { onMount } from 'svelte';
	import {gsap, ScrollTrigger} from '$lib/gsap';

	let barIcon: HTMLElement;

/* 	const barChartAnimation = () => {
		const paths = barIcon.querySelectorAll('path');
		const barPaths = gsap.utils.toArray([paths[0], paths[1], paths[2], paths[3], paths[4]])
		const underline = paths[5]
		const underlineAndArrow = gsap.utils.toArray([paths[6], paths[7], paths[8]])

		let timeline = gsap.timeline();
		
		timeline.from(barPaths, {
			translateY: 400,
			stagger: 0.3,
			ease: "Power3.easeOut"
		})
		timeline.from(underline, {
			xPercent: -100
		})
		timeline.from(underlineAndArrow, {
			opacity: 0,
			duration: 1
		})

		return () => {
			timeline.kill();
		}
	}

	onMount(() => {
		const destory = barChartAnimation();

		return () => destory();
	}); */
</script>


<Hero />

<CtaBlock
	content={{
		// title: 'We operate at the intersection of science and style.',
		headings: ['We operate at', 'the intersection', 'of science and style'],
		desc: 'Whether you are in the start-up phase or are truly looking to scale your business; we will help build the best path to success.',
		button: { text: 'Read about us', href: '/about' }
	}}
	icon="funnel"
/>

<div class="container section--sm">
	<h2 class="floating-text">Old ways won't open new doors. Let's re-think the future..</h2>
</div>

<div class="blackout">
	<CtaBlock
		content={{
			// title: 'The missing piece of your marketing puzzle.',
			headings: ['The missing', 'peice of your', 'marketing pizzle'],
			desc: "We develop world-class digital experiences that grow companies. From brand strategy to web development to digital marketing, beautiful design isn't just what we do; it's our life's work.",
			button: { text: "Let's talk", href: '/contact' }
		}}
		icon="puzzle"
	/>

	<CtaBlock
		content={{
			// title: 'No Fluff. High impact. No penny wasted.',
			headings: ['Simple efficient', 'strategies that', 'drives results'],
			desc: 'We believe in telling stories. Emotions drive our choices, our wallets, and our lives. We help businesses to tell that story with their online presence.',
			button: { text: 'See our services', href: '/services' }
		}}
		icon="barChart"
		contentLocation="right"
	/>
</div>

<IndexServices />

<div class="blackout">
	<TextScroll />
</div>

<CallToAction button={{ text: 'Talk to us', href: '/contact' }}>
	Ready to tell your story? 🚀
</CallToAction>

<ContactSection />

<style lang="scss">
	.floating-text {
		max-width: 30ch;
	}
	.blackout {
		position: relative;
		background-color: var(--color-black);
		z-index: 10;
	}

	/* Laptop */
	@media screen and (max-width: 1024px) {
		.floating-text {
			text-align: center;
			margin: 0 auto;
		}
	}
</style>
