<script lang="ts">
	import { browser } from '$app/env';
	import { gsap } from 'gsap';
	import { onDestroy, onMount } from 'svelte';

	interface Service {
		name: string;
		imgSrc: string;
	}

	const SERVICES: Service[] = [
		{ name: 'Website Development', imgSrc: '/images/services/service_branding.png' },
		{ name: 'UI/UX Design', imgSrc: '/images/services/service_ui.png' },
		{ name: 'Backend Development', imgSrc: '/images/services/service_marketing.png' },
		{ name: 'Branding & Marketing', imgSrc: '/images/services/service_website.png' }
	];

	let hoverdServiceIndex: number = 1;
	let circleElement: HTMLElement;
	let circleScrollTimeline: gsap.core.Timeline | null;

	function setupCircleScrollTrigger(node: HTMLElement) {
		circleScrollTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: '#white-section',
				start: 'top+=5% center',
				end: 'bottom+=20% center-=20%',
				scrub: 1.2
			},
			defaults: {}
		});

		circleScrollTimeline.to(node, { width: '100%', height: '100%', borderRadius: 0 });
		circleScrollTimeline.to(node, { width: '50%', height: '50%', borderRadius: 100 }, '+=0.5');

		circleScrollTimeline.scrollTrigger?.refresh();
	}
	async function registerAnimations() {
		const { ScrollTrigger } = await import('gsap/ScrollTrigger');
		gsap.registerPlugin(ScrollTrigger);
		setupCircleScrollTrigger(circleElement);
	}
	function destoryAnimations() {
		if (circleScrollTimeline?.scrollTrigger) {
			circleScrollTimeline.kill();
			circleScrollTimeline?.scrollTrigger?.disable();
			circleScrollTimeline = null;
			console.log('Destorying circle scroll timeline.');
		}
	}

	onMount(() => {
		registerAnimations();
	});

	onDestroy(() => {
		destoryAnimations();
	})
</script>

<section class="section" id="white-section">
	<div class="services container">
		{#each SERVICES as service, i}
			<a href="/" on:mouseenter={() => (hoverdServiceIndex = i)}>
				<!-- on:mouseleave={() => (hoverdServiceIndex = 0)} -->
				{service.name}
			</a>
		{/each}
	</div>

	<div class="circle-wrap">
		<div
			class="circle"
			bind:this={circleElement}
			style:background-image="url({SERVICES[hoverdServiceIndex]?.imgSrc})"
		/>
	</div>
</section>

<style lang="scss">
	section {
		height: 105vh;
		position: relative;
	}

	img {
		position: absolute;
		top: 0;
		left: 0;
		// width: 100%;
		// height: 100%;
		object-fit: cover;
		opacity: 0;
		z-index: 0;
		width: 100%;
		height: 100%;
		transition: opacity 0.25s ease-out;

		&.active {
			opacity: 1;
		}
	}
	.circle-wrap {
		display: flex;
		justify-content: center;
	}

	.circle {
		width: 110px;
		height: 110px;
		border-radius: 50%;
		background-color: var(--color-off-white);
		background-size: cover;
		margin: 0 auto;
		position: absolute;
		top: 0;
		overflow: hidden;
		z-index: -1;
		background-position: 50%;
		background-size: cover;
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
	}

	.services {
		display: flex;
		flex-direction: column;
		position: relative;
		z-index: 20;
		color: var(--color-black);
		margin-top: -2rem;
	}

	a {
		transition: transform 0.28s ease-out;
		font-size: var(--text-h2);
		color: var(--color-black);
		padding: var(--space-lg) 0;

		&:hover {
			transform: translateX(25px);
		}
	}
</style>
