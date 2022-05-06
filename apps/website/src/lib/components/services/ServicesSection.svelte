<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import Button from '../buttons/Button.svelte';
	import { gsap, ScrollTrigger } from '$lib/gsap';
	import { destoryTweens } from '$lib/gsap-utils';

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

	const pinImageElement = () => {
		let trigger: ScrollTrigger;

		ScrollTrigger.matchMedia({
			'(min-width: 1024px)': function () {
				trigger = ScrollTrigger.create({
					trigger: sectionWrapper,
					start: 'top top+=5%',
					end: 'bottom bottom',
					pin: '.services__images'
				});
			}
		});

		return () => {
			trigger.kill();
		};
	};

	let loadedImages: number = 0;
	const handleImageLoad = () => {
		loadedImages++;
		if (loadedImages === SERVICES.length) {
			ScrollTrigger.refresh();
		}
	}

	const setupImageSlideout = () => {
		const serviceBlocks: HTMLElement[] = gsap.utils.toArray('.services__content');
		const images: HTMLElement[] = gsap.utils.toArray('#service-image');
		let tweens: gsap.core.Tween[] = [];

		/* Don't animate first block or image. */
		serviceBlocks.shift();
		images.shift();

		serviceBlocks.forEach((block, i) => {
			let tween = gsap.to(images[i], {
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

			tweens.push(tween);
		});

		return () => {
			destoryTweens(tweens, true);
		};
	};

	function resizeHandler() {
		ScrollTrigger.refresh();
	}

	onMount(() => {
		let destoryPinImage = pinImageElement();
		let destoryImageSlideout = setupImageSlideout();

		const mediaQuery = window.matchMedia('(max-width: 1024px)');
		mediaQuery.addEventListener('change', resizeHandler);

		return () => {
			destoryPinImage();
			destoryImageSlideout();
			mediaQuery.removeEventListener('change', resizeHandler);
		};
	});
</script>

<section class="container" style="--sectionSize: {sectionSize}" bind:this={sectionWrapper}>
	<div class="services">
		{#each SERVICES as service}
			<div class="services__content">
				<div class="services__mobile-images">
					<img src="/images/services/{service.image}" alt="" />
				</div>

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
				on:load={handleImageLoad}
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

		&__mobile-images {
			display: none;
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

	@media screen and (max-width: 1024px) {
		.services {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 0 auto;
			gap: var(--space-6xl);

			&__content {
				height: auto;
			}

			&__mobile-images {
				height: 350px;
				display: block;
			}

			&__images {
				display: none;
			}
		}
	}

	/* Mobile */
	@media screen and (max-width: 425px) {
		.services {
			&__mobile-images {
				height: 250px;
				display: block;
			}
		}

		section {
			margin: var(--space-section-sm) auto;
		}
	}
</style>
