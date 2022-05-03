<script lang="ts">
	import CallToAction from '$lib/components/global/CallToAction.svelte';
	import ContactSection from '$lib/components/global/ContactSection.svelte';
	import HeaderImage from '$lib/components/global/HeaderImage.svelte';
	import CtaBlock from '$lib/components/index/CtaBlock.svelte';
	import Hero from '$lib/components/index/Hero.svelte';
	import IndexServices from '$lib/components/index/IndexServices.svelte';
	import TextScroll from '$lib/components/index/TextScroll.svelte';
</script>

<Hero />

<CtaBlock
	content={{
		// title: 'We operate at the intersection of science and style.',
		headings: ['We operate at', 'the intersection', 'of science and', 'style.'],
		desc: 'We help you unlock your unique growth loops and put them into action with frameworks and strategies that drive rapid growth and maximize revenue potential.',
		button: { text: 'See our approach', href: '/' }
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
			desc: "Armed with diverse perspectives and experiences, our high-energy teams unite to develop world-class digital experiences that grow companies. From brand strategy to web development to digital marketing, beautiful design isn't just what we do; it's our life’s work.",
			button: { text: 'See our approach', href: '/' }
		}}
		icon="puzzle"
	/>

	<CtaBlock
		content={{
			// title: 'No Fluff. High impact. No penny wasted.',
			headings: ['No Fluff. High', 'Impact. No penny wasted'],
			desc: 'We are hyper-focused on increasing your revenue. We leverage learnings from past projects & experiments with successful brands and startups to refine the growth playbook we create for your business.',
			button: { text: 'See our services', href: '/' }
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
	Ready to kick off your growth journey? 🚀
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
