<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { gsap, ScrollTrigger } from '$lib/gsap';
	import { destoryTimelines, destoryTweens } from '$lib/gsap-utils';

	let GROUPS_HEADING = ['Apps', 'Websites', 'UI/UX', 'Design'];
	let currentGroupIndex = 0;

	let headingElement: HTMLElement;
	let groupsElement: HTMLElement;
	let blackGroupElement: HTMLElement;
	let blackGroupElementTwo: HTMLElement;

	function refreshScrollTrigger() {
		const images = groupsElement.querySelectorAll('img');
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

	function pinHeader(element: HTMLElement) {
		if (!element) return;
		let headingSize = element.clientHeight + 20;

		let trigger = ScrollTrigger.create({
			trigger: groupsElement,
			start: () => `top bottom-=${headingSize}`,
			end: () => `bottom bottom`,
			pinnedContainer: groupsElement,
			pin: element,
			pinSpacing: false,
			invalidateOnRefresh: true
		});

		return trigger;
	}

	function changeBackgroundColor() {
		let blackGroups: HTMLElement[] = gsap.utils.toArray([blackGroupElement, blackGroupElementTwo]);
		let timelines: gsap.core.Timeline[] = [];

		blackGroups.forEach((blackGroup, i) => {
			let timeline = gsap.timeline({
				scrollTrigger: {
					trigger: blackGroup,
					start: 'top bottom',
					end: 'bottom bottom',
					onLeave: (self) => {
						if (i == blackGroups.length - 1) return;
						self.animation?.reverse();
					},
					onEnterBack: (self) => self.animation?.play(),
					onLeaveBack: (self) => self.animation?.reverse()
				}
			});

			timeline.to(groupsElement, {
				backgroundColor: '#141313'
			});
			timeline.to(headingElement, { color: 'white' }, '<');

			timelines.push(timeline);
		});

		return () => {
			destoryTimelines(timelines, true);
		};
	}

	function moveImagesSlightly(groupNode: HTMLElement) {
		const imagesFirst = groupNode.querySelectorAll('img');
		if (!imagesFirst?.length) return;

		let tweens: gsap.core.Tween[] = [];

		imagesFirst.forEach((image) => {
			let tween = gsap.to(image, {
				scrollTrigger: {
					trigger: image.parentElement,
					start: 'top bottom',
					end: 'bottom top',
					scrub: gsap.utils.random([0.7, 2, 1.5, 3])
				},
				y: `-${gsap.utils.random([40, 80, 50, 70, 90])}%`
			});

			tweens.push(tween);
		});

		return () => {
			destoryTweens(tweens, true);
		};
	}

	function changeHeaderText() {
		const groups = groupsElement.querySelectorAll('.group');

		groups.forEach((group, i) => {
			ScrollTrigger.create({
				trigger: group,
				start: 'top bottom',
				end: 'bottom bottom',
				invalidateOnRefresh: true,
				onEnter: () => (currentGroupIndex = i),
				onEnterBack: () => (currentGroupIndex = i),
				onLeaveBack: () => (currentGroupIndex = i)
			});
		});
	}

	onMount(() => {
		let pinScrollTrigger = pinHeader(headingElement);
		let destoryBackgroundTrigger = changeBackgroundColor();
		let destoryImageTrigger = moveImagesSlightly(groupsElement);
		changeHeaderText();
		refreshScrollTrigger();

		return () => {
			if (destoryImageTrigger) destoryImageTrigger();
			pinScrollTrigger?.kill();
			destoryBackgroundTrigger();
		};
	});
</script>

<div class="groups section--md" bind:this={groupsElement}>
	<div class="group group--first">
		<img src="/images/about/branding_4.png" alt="" />
		<img src="/images/about/branding_2.png" alt="" />
		<img src="/images/about/branding_3.png" alt="" />
		<img src="/images/about/branding_3.png" alt="" />
	</div>

	<div class="group group--second" bind:this={blackGroupElement}>
		<img src="/images/about/branding_3.png" alt="" />
		<img src="/images/about/branding_2.png" alt="" />
		<img src="/images/about/branding_4.png" alt="" />
		<img src="/images/about/branding_3.png" alt="" />
	</div>

	<div class="group group--third">
		<img src="/images/about/branding_3.png" alt="" />
		<img src="/images/about/branding_4.png" alt="" />
		<img src="/images/about/branding_3.png" alt="" />
		<img src="/images/about/branding_2.png" alt="" />
	</div>

	<div class="group group--second" bind:this={blackGroupElementTwo}>
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
		margin-top: 10rem;

		&--second {
			grid-template-columns: 1.2fr 1.7fr 1fr 1.8fr;
			height: 70vh;
			margin-top: 10rem;
		}

		&--third {
			margin-top: 10rem;
			grid-template-columns: 1.5fr 1fr 1fr 1.4fr;
		}
		&--first {
			margin-top: 20rem;
		}

		img {
			display: block;
			max-width: 100%;
			width: 100%;
			object-fit: cover;
			position: relative;
			z-index: 1;
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
		letter-spacing: -10px;
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

	@media screen and (max-width: 1024px) {
		h1 {
			font-size: 15rem;
		}
	}

	@media screen and (max-width: 425px) {
		h1 {
			font-size: 6rem;
		}
		.groups {
			padding: var(--space-5xl) 0;
		}
		.group {
			grid-template-columns: 1.2fr 1fr;
			grid-template-rows: 1fr 1fr;
			gap: 3rem;
			row-gap: 8rem;

			&--second {
				grid-template-columns: 1.2fr 1.4fr;
			}

			&--third {
				margin-top: 20rem;
				grid-template-columns: 1.5fr 1fr;
			}
			&--first {
				margin-top: 10rem;
			}
		}
	}
</style>
