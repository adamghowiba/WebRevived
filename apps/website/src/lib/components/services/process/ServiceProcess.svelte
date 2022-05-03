<script lang="ts">
	import { gsap,ScrollTrigger } from '$lib/gsap';
	import { destoryTweens } from '$lib/gsap-utils';
	import { onMount } from 'svelte';
	import ProcessBlock from './ProcessBlock.svelte';

	let blocksWrapper: HTMLElement;
	let mobileHoverTimeline: gsap.core.Timeline;

	function setupMobileHover() {
		let blocks: HTMLElement[] = gsap.utils.toArray('.block');
		let tweens: gsap.core.Tween[] = [];

		ScrollTrigger.matchMedia({
			'(max-width: 597px)': () => {
				blocks.forEach((block) => {
					let tween = gsap.to(block, {
						scrollTrigger: {
							trigger: block,
							start: 'top center',
							end: 'bottom center',
							invalidateOnRefresh: true,
							toggleActions: 'play none play reverse'
						},
						fill: 'white'
					});

					tweens.push(tween);
				});
			}
		});

		return () => {
			destoryTweens(tweens, true);
		};
	}

	onMount(() => {
		let desotry = setupMobileHover();
		
		return () => {
			desotry();
		};
	});
</script>

<section class="section container">
	<h2>How we'll work together</h2>

	<div class="blocks" bind:this={blocksWrapper}>
		<ProcessBlock
			title="Design-focused, first and foremost."
			number={1}
			content="As a team, we're design-focused across every touchpoint or interaction. Everything we do and dream up has a solid design impact. We get up and go in the morning, supercharged to make a difference with design as a top-of-mind solution."
		/>
		<ProcessBlock
			title="Design-focused, first and foremost."
			number={2}
			content="As a team, we're design-focused across every touchpoint or interaction. Everything we do and dream up has a solid design impact. We get up and go in the morning, supercharged to make a difference with design as a top-of-mind solution."
		/>
		<ProcessBlock
			title="Design-focused, first and foremost."
			number={3}
			content="As a team, we're design-focused across every touchpoint or interaction. Everything we do and dream up has a solid design impact. We get up and go in the morning, supercharged to make a difference with design as a top-of-mind solution."
		/>
		<ProcessBlock
			title="Design-focused, first and foremost."
			number={4}
			content="As a team, we're design-focused across every touchpoint or interaction. Everything we do and dream up has a solid design impact. We get up and go in the morning, supercharged to make a difference with design as a top-of-mind solution."
		/>
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
	}
	.blocks {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: var(--space-xl);
	}

	/* MIDDLE MOBILE - TABLET */
	@media screen and (max-width: 597px) {
		.blocks {
			grid-template-columns: 1fr;
			grid-template-rows: auto;
		}
	}
</style>
