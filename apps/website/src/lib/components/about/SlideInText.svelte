<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '../buttons/Button.svelte';
	import { gsap } from 'gsap';

	let textBlocks = ['We drive', 'experiences', 'for brands with', 'purpose'];
	let textWrapper: HTMLElement;

	function setupTextAnimation() {
		const textElements = textWrapper.querySelectorAll('h1');

		let tween = gsap.to(textElements[textElements.length - 1], {
			color: '#7EE3B2',
			paused: true,
			fontStyle: 'italic'
		});

		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: textWrapper,
				scrub: 3,
				start: 'top center+=20%',
				end: 'center+=5% center+=10%',
				onLeave: () => tween.play()
			}
		});

		let textRight = false;
		textElements.forEach((element) => {
			// timeline.set(element, )
			textRight = !textRight;
			timeline.from(element, {
				x: `${textRight ? '-150%' : '150%'}`
			});
		});
	}

	onMount(async () => {
		const { ScrollTrigger } = await import('gsap/ScrollTrigger');
		gsap.registerPlugin(ScrollTrigger);

		setupTextAnimation();
	});
</script>

<section class="section" bind:this={textWrapper}>
	{#each textBlocks as block}
		<h1>{block}</h1>
	{/each}
	<Button textStyle="uppercase">Lets Talk</Button>
</section>

<style lang="scss">
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: var(--space-md);
		height: 80vh;
	}

	h1 {
		font-weight: var(--fw-extra-bold);
		font-size: var(--text-title);
	}
</style>
