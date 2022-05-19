<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { gsap, ScrollTrigger } from '$lib/gsap';

	interface Service {
		name: string;
		imgSrc: string;
		href: string;
	}

	const SERVICES: Service[] = [
		{
			name: 'Branding & Identity',
			imgSrc: '/images/services/service_branding.png',
			href: '/services'
		},
		{ name: 'Social Mangement', imgSrc: '/images/services/service_ui.png', href: '/services' },
		{
			name: 'Web Development',
			imgSrc: '/images/services/service_marketing.png',
			href: '/services'
		},
	];

	let hoverdServiceIndex: number = 1;
	let circleElement: HTMLElement;

	function setupCircleScrollTrigger(node: HTMLElement) {
		let timeline = gsap.timeline({
			scrollTrigger: {
				trigger: '#white-section',
				start: 'top+=5% bottom-=10%',
				end: 'bottom-=25% bottom-=10%',
				scrub: 1.2
			},
			defaults: {}
		});

		timeline.to(node, { width: '100%', height: '100%', borderRadius: 0 });
		// circleScrollTimeline.to(node, { width: '50%', height: '50%', borderRadius: 100 }, '+=0.5');

		return () => {
			timeline.scrollTrigger?.kill();
			timeline.kill();
		};
	}

	onMount(() => {
		const destory = setupCircleScrollTrigger(circleElement);

		return () => {
			destory();
		};
	});
</script>

<section class="section" id="white-section">
	<div class="services container">
		<h5 class="header">Where we shine</h5>

		{#each SERVICES as service, i}
			<a href={service.href} on:mouseenter={() => (hoverdServiceIndex = i)}>
				<!-- on:mouseleave={() => (hoverdServiceIndex = 0)} -->
				{service.name}
				<div class="icon">
					<Icon icon="bytesize:arrow-right" width={33} height={33} />
				</div>
			</a>
		{/each}
	</div>

	<div class="circle-wrap">
		<div class="circle" bind:this={circleElement}>
			{#each SERVICES as services, i}
				<img src={services.imgSrc} alt={services.name} class:active={hoverdServiceIndex === i} />
				<!-- <div class="image"></div> -->
			{/each}
		</div>
		<!-- style:background-image="url({SERVICES[hoverdServiceIndex]?.imgSrc})" -->
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
		width: 100%;
		height: 100%;
		opacity: 0;
		object-fit: cover;
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
		// z-index: -1;
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

		.header {
			color: var(--color-black);
			font-weight: var(--fw-medium);
		}
	}

	a {
		display: flex;
		gap: var(--space-sm);
		transition: transform 0.28s ease-out;
		font-size: var(--text-h2);
		color: var(--color-black);
		padding: var(--space-lg) 0;

		&:hover {
			transform: translateX(25px);
		}

		&:hover .icon {
			opacity: 1;
		}

		.icon {
			top: 2px;
			position: relative;
			opacity: 0;
			transition: opacity 0.2s ease-out;
		}
	}
</style>
