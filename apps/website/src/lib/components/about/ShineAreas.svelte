<script lang="ts">
	import {
		changeHeaderText,
		groupScrollTrigger,
		moveImagesSlightly,
		pinHeader
	} from '$lib/components/about/shine-animations';
	import { ScrollTrigger } from '$lib/gsap';
	import { onMount } from 'svelte';

	let GROUPS_HEADING = ['Branding', 'Social', 'Web', 'UI/UX'];
	let currentGroupIndex = 0;

	let headingElement: HTMLElement;
	let groupsWrapper: HTMLElement;

	function refreshScrollTrigger() {
		const images = groupsWrapper.querySelectorAll('img');
		let loadedImages = 0;

		const loadEventHandler = () => {
			loadedImages++;
			if (loadedImages === images.length) {
				ScrollTrigger.refresh();
				return;
			}
		};

		images.forEach((image: HTMLImageElement, i) => {
			image.addEventListener('load', loadEventHandler, { once: true });
		});
	}

	onMount(() => {
		let destoryPinTrigger = pinHeader(headingElement, groupsWrapper);
		let destoryAnimation = groupScrollTrigger(groupsWrapper, headingElement);
		let destoryHeaderTrigger = changeHeaderText(
			groupsWrapper,
			(index) => (currentGroupIndex = index)
		);
		let destoryImageTrigger = moveImagesSlightly(groupsWrapper);

		refreshScrollTrigger();

		return () => {
			if (destoryImageTrigger) destoryImageTrigger();
			destoryPinTrigger();
			destoryAnimation();
			destoryHeaderTrigger();
		};
	});
</script>

<div class="groups section--md" bind:this={groupsWrapper}>
	<div class="group group--first">
		<img src="/images/about/branding_4.png" alt="" />
		<img src="/images/services/service_branding.png" alt="" />
		<img src="/images/services/service_2.png" alt="" />
		<img src="/images/about/branding_3.png" alt="" />
	</div>

	<div class="group group--second">
		<img src="/images/services/service_1.png" alt="" />
		<img src="/images/about/branding_2.png" alt="" />
		<img src="/images/about/branding_3.png" alt="" />
		<img src="/images/services/service_3.png" alt="" />
	</div>

	<div class="group group--third">
		<img src="/images/services/service_marketing.png" alt="" />
		<img src="/images/services/service_ui.png" alt="" />
		<img src="/images/services/tile_frames.png" alt="" />
		<img src="/images/services/webdesign_showcase_1.png" alt="" />
	</div>

	<div class="group group--second">
		<img src="/images/about/branding_3.png" alt="" />
		<img src="/images/about/branding_4.png" alt="" />
		<img src="/images/about/branding_3.png" alt="" />
		<img src="/images/about/branding_2.png" alt="" />
	</div>

	<h1 bind:this={headingElement}>{GROUPS_HEADING[currentGroupIndex]}</h1>
</div>

<style lang="scss">
	.groups {
		height: auto;
		position: relative;
		background-color: white;
		padding-bottom: var(--space-section-sm);
	}
	.group {
		width: 100%;
		position: relative;
		display: grid;
		grid-template-columns: 1.7fr 1.2fr 1fr 1.8fr;
		gap: var(--space-md);
		min-height: 70vh;
		column-gap: 5vw;

		&:nth-child(1) {
			margin-top: 10rem;
		}

		img {
			display: block;
			max-width: 100%;
			width: 100%;
			object-fit: cover;
			position: relative;
			z-index: 1;
			min-height: 220px;
		}
		img:nth-child(1) {
			top: -130px;
		}

		img:nth-child(2) {
			top: 140px;
		}

		img:nth-child(3) {
			top: -100px;
		}

		img:nth-child(4) {
			top: 50px;
		}
	}
	h1 {
		top: 0;
		left: 0;
		position: absolute;
		font-size: 15rem;
		font-weight: var(--fw-bold);
		letter-spacing: -7px;
		// color: white;
		// mix-blend-mode: difference;
		color: var(--color-black);
		z-index: 5;
	}

	img:nth-child(even) {
		z-index: 10;
	}
	img:nth-child(odd) {
		z-index: 0;
	}

	// Laptop
	@media screen and (max-width: 1024px) {
		h1 {
			font-size: 12rem;
		}
	}

	// Tablet
	@media screen and (max-width: 768px) {
		h1 {
			font-size: 10rem;
		}
	}

	// Phone LG
	@media screen and (max-width: 597px) {
		h1 {
			font-size: 8rem;
		}
		.groups {
			padding: var(--space-5xl) 0;
		}
		.group {
			grid-template-columns: 1.2fr 1fr;
			grid-template-rows: 1fr 1fr;
			gap: 3rem;
			row-gap: 8rem;

			img:nth-child(even) {
				margin: var(--space-5xl) 0;
			}

			&--second {
				grid-template-columns: 1.2fr 1.4fr;
			}

			&--third {
				grid-template-columns: 1.5fr 1fr;
			}
			&--first {
				margin-top: 10rem;
			}
		}
	}

	@media screen and (max-width: 425px) {
		h1 {
			font-size: 6rem;
		}
	}

	// Phone SM
	@media screen and (max-width: 375px) {
		h1 {
			font-size: 5.3rem;
		}
	}
</style>
