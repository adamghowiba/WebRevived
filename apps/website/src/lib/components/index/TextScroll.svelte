<script lang="ts">
	import { gsap } from '$lib/gsap';
	import { destoryTweens } from '$lib/gsap-utils';
	import { onMount } from 'svelte';

	let text =
		"We make things, and we're awesome at it. Web Revived is a tight-knit team of experts who are ready to tackle the most intricate puzzles when it comes to digital marketing.";

	let textWrapper: HTMLElement;

	const textAnimation = () => {
		const lines = textWrapper.querySelectorAll('.line');
		const tweens: gsap.core.Tween[] = [];

		lines.forEach((elem, i) => {
			let tween = gsap.to(elem, {
				scrollTrigger: {
					trigger: elem,
					start: `top-=20% center+=25%`,
					end: 'bottom+=70% center+=25%',
					scrub: 1.4
				},
				backgroundPositionX: '0',
				duration: 1,
				stagger: 0.4
			});

			tweens.push(tween);
		});

		return () => {
			destoryTweens(tweens, true);
		};
	};

	onMount(() => {
		// const destory = textAnimation();

		return () => {
			// destory();
		};
	});

	const splitText = (text: string, amount: number) => {
		const partsArray: string[] = [];
		let parts = text.split(' ');
		let partCount = 0;
		let currentPart = 0;

		for (let i = 0; i < parts.length; i++) {
			if (!partsArray[currentPart]) partsArray[currentPart] = '';
			partsArray[currentPart] += `${parts[i]} `;

			if (partCount > amount) {
				partCount = 0;
				currentPart++;
			}
			partCount++;
		}

		return partsArray;
	};
</script>

<section class="container">
	<!-- <h3 bind:this={textWrapper}>
		{#each splitText(text, 7) as line}
			<div class="line">{line}</div>
		{/each}
	</h3> -->
	<h3>
		We make things, and we're awesome at it. Web Revived is a tight-knit team of experts who are
		ready to tackle the most intricate puzzles when it comes to digital marketing.
	</h3>
</section>

<style lang="scss">
	section {
		text-align: center;
		height: 80vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	h3 {
		line-height: var(--line-xl);
		max-width: 50ch;
		text-align: center;
	}

	.line {
		background: linear-gradient(to right, rgb(255, 255, 255) 50%, rgb(37, 37, 37) 50%);
		color: transparent;
		background-clip: text;
		-webkit-background-clip: text;
		background-size: 200% 100%;
		background-position-x: 100%;
	}

	@media screen and (max-width: 768px) {
		h3 {
			line-height: var(--line-md);
		}
	}
</style>
