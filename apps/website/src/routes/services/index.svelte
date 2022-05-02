<script lang="ts">
	import ContactSection from '$lib/components/global/ContactSection.svelte';
	import HeaderImage from '$lib/components/global/HeaderImage.svelte';
	import PageHeader from '$lib/components/global/PageHeader.svelte';
	import ServiceProcess from '$lib/components/services/process/ServiceProcess.svelte';
	import ServicesSection from '$lib/components/services/ServicesSection.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	onMount(async () => {
		const { ScrollTrigger } = await import('gsap/ScrollTrigger');
		gsap.registerPlugin(ScrollTrigger);
	});
</script>

<PageHeader
	pageName="Services"
	title="Our extensive experience fuels our future."
	subtitle="We are a team of people who believe in what they do."
/>

<HeaderImage imgSrc="/images/services/tile_frames.png" />

<article class="section--md container description">
	<h4>What We Do</h4>
	<p class="body--xl">
		A strategic and tactical approach is essential for long-term goals, but what's even more
		important is keeping deadlines and promises. Our work gets results and we never hide behind
		paperwork.
	</p>
</article>

<ServicesSection />

<ServiceProcess />

<ContactSection />

<style lang="scss">
	.description {
		display: grid;
		grid-template-columns: 1fr 1.5fr;
		align-items: center;
		gap: var(--space-xl);

		p {
			color: var(--color-off-white);
		}
	}

	/* TABLET */
	@media screen and (max-width: 768px) {
		.description {
			display: flex;
			flex-direction: column;
			text-align: center;

		}
	}
</style>
