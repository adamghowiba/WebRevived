<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import ProcessBlock from './ProcessBlock.svelte';
	import { gsap } from 'gsap';

	let blocksWrapper: HTMLElement;
	let mobileHoverTimeline: gsap.core.Timeline;

	function setupMobileHover(scrollTrigger: typeof ScrollTrigger) {
		mobileHoverTimeline = gsap.timeline();

		let blocks: HTMLElement[] = gsap.utils.toArray('.block');

		scrollTrigger.matchMedia({
			'(max-width: 597px)': () => {
				blocks.forEach((block) => {
					mobileHoverTimeline.to(block, {
						scrollTrigger: {
							trigger: block,
							markers: true,
							start: 'top center',
							end: 'bottom center',
							invalidateOnRefresh: true,
							toggleActions: 'play none play reverse'
						},
						fill: 'white'
					});
				});
			}
		});
	}

	async function registerAnimations() {
		const { ScrollTrigger } = await import('gsap/ScrollTrigger');
		gsap.registerPlugin(ScrollTrigger);

		setupMobileHover(ScrollTrigger);
	}

	onMount(() => {
		if (mobileHoverTimeline) {
			mobileHoverTimeline?.scrollTrigger?.refresh();
		}
		registerAnimations();
	});

	onDestroy(() => {
		if (!mobileHoverTimeline?.scrollTrigger) return;
		mobileHoverTimeline.kill();
		mobileHoverTimeline.scrollTrigger.kill(true);
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
