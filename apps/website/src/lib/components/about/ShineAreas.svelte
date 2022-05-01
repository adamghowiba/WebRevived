<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	let GROUPS_HEADING = ['Apps', 'Websites', 'UI/UX'];
	let currentGroupIndex = 0;

	let headingElement: HTMLElement;
	let firstGroupElement: HTMLElement;
	let groupsElement: HTMLElement;

	function pinHeader() {
		ScrollTrigger.create({
			trigger: '.groups',
			start: 'top top',
			end: 'bottom top+=20%',
			pin: headingElement
		});
	}

	function changeBackgroundImage() {
		let timeline = gsap.timeline({
			scrollTrigger: {
				trigger: firstGroupElement,
				start: 'top center',
				end: 'bottom center-=20%',
				onLeave: (self) => {
					self.animation?.reverse();
				},
				onEnterBack: (self) => self.animation?.play(),
				onLeaveBack: (self) => self.animation?.reverse()
			}
		});

		timeline.to(groupsElement, {
			backgroundColor: '#141313'
		});
	}

	function moveImagesSlightly() {
		const imagesFirst = groupsElement.querySelectorAll('img');

		imagesFirst.forEach((image) => {
			gsap.to(image, {
				scrollTrigger: {
					trigger: image.parentElement,
					start: 'top bottom',
					end: 'bottom top',
					preventOverlaps: true,
					scrub: gsap.utils.random(0.5, 2, 0.3)
					// TODO: Use set values
					//   scrub:"random([0, 100, 200, 500])"
				},
				y: `-${gsap.utils.random(40, 70, 7)}%`
			});
		});
	}

	function changeHeaderText() {
		const groups = groupsElement.querySelectorAll('.group');

		groups.forEach((group, i) => {
			ScrollTrigger.create({
				trigger: group,
				start: 'top center',
				end: 'bottom center',
				onEnter: () => {
					currentGroupIndex = i;
				},
				onEnterBack: () => (currentGroupIndex = i),
				onLeaveBack: () => (currentGroupIndex = i)
			});
		});
	}

	onMount(async () => {
		const { ScrollTrigger } = await import('gsap/ScrollTrigger');
		gsap.registerPlugin(ScrollTrigger);

		pinHeader();
		changeBackgroundImage();
		moveImagesSlightly();
		changeHeaderText();
	});
</script>

<div class="groups section--md" bind:this={groupsElement}>
	<div class="group group--first">
		<img src="/images/about/branding_4.png" alt="" />
		<img src="/images/about/branding_2.png" alt="" />
		<img src="/images/about/branding_3.png" alt="" />
		<img src="/images/about/branding_3.png" alt="" />
	</div>

	<div class="group group--second" bind:this={firstGroupElement}>
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

	<h1 bind:this={headingElement}>{GROUPS_HEADING[currentGroupIndex]}</h1>
</div>

<style lang="scss">
	.groups {
		height: auto;
		position: relative;
		background-color: white;
		padding-bottom: var(--space-section-sm);
	}
	.heading {
		height: auto;
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
		color: white;
		font-size: 15rem;
		font-weight: var(--fw-bold);
		letter-spacing: -10px;
		mix-blend-mode: difference;
		height: 100px;
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
