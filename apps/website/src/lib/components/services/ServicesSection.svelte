<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import Button from '../buttons/Button.svelte';

	let sectionWrapper: HTMLElement;
	let sectionSize = '90vh';

	const SERVICES = [
		{
			title: 'Website Design',
			desc: 'Armed with diverse perspectives and experiences, our high-energy teams unite to develop world-class digital experiences that grow companies.',
			image: 'service_1.png',
			link: '/services/web-design'
		},
		{
			title: 'Social Mangement',
			desc: 'Armed with diverse perspectives and experiences, our high-energy teams unite to develop world-class digital experiences that grow companies.',
			image: 'service_2.png',
			link: '/services/social'
		},
		{
			title: 'Branding & Idenity',
			desc: 'Armed with diverse perspectives and experiences, our high-energy teams unite to develop world-class digital experiences that grow companies.',
			image: 'service_3.png'
		}
	];

	const pinImageElement = (scrollTrigger: typeof ScrollTrigger) => {
		scrollTrigger.create({
			trigger: sectionWrapper,
			start: 'top top+=5%',
			end: 'bottom bottom',
			pin: '.services__images'
		});
	};

	const setupImageSlideout = () => {
		const serviceBlocks: HTMLElement[] = gsap.utils.toArray('.services__content');
		const images: HTMLElement[] = gsap.utils.toArray('#service-image');

		/* Don't animate first block or image. */
		serviceBlocks.shift();
		images.shift();

		serviceBlocks.forEach((block, i) => {
			gsap.to(images[i], {
				height: '100%',
				scrollTrigger: {
					trigger: block,
					start: 'top bottom-=10%',
					end: 'bottom bottom',
					scrub: 0.7,
					snap: {
						snapTo: 1,
						delay: 1,
						duration: 1
					}
				}
			});
		});
	};

	onMount(async () => {
		const { ScrollTrigger } = await import('gsap/ScrollTrigger');
		gsap.registerPlugin(ScrollTrigger);

		pinImageElement(ScrollTrigger);
		setupImageSlideout();
	});
</script>

<section class="container" style="--sectionSize: {sectionSize}" bind:this={sectionWrapper}>
	<div class="services">
		{#each SERVICES as service}
			<div class="services__content">
				<h3>{service.title}</h3>
				<p class="body--lg">{service.desc}</p>
				<Button icon="mdi:arrow-right" style="link" href={service.link}>See Service</Button>
			</div>
		{/each}
	</div>

	<div class="services__images">
		{#each SERVICES as service, i}
			<img
				id="service-image"
				class:service-image--hidden={i !== 0}
				src="/images/services/{service.image}"
				alt=""
			/>
		{/each}
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		gap: var(--space-xl);
		justify-content: space-between;
		width: 100%;
		margin: var(--space-section-base) auto;
	}
	.services {
		height: 100%;

		&__images {
			height: var(--sectionSize, 90vh);
			position: relative;
			width: 100%;
			max-width: 550px;
		}

		&__content {
			display: flex;
			flex-direction: column;
			gap: var(--space-md);
			max-width: 50ch;
			justify-content: center;
			height: var(--sectionSize, 90vh);
		}
	}
	.service-image--hidden {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 0%;
	}
	img {
		display: block;
		height: 100%;
		width: 100%;
		object-fit: cover;
		object-position: 50%;
	}
</style>
