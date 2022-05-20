<script lang="ts">
	import { gsap, ScrollTrigger } from '$lib/gsap';
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
			title="We're part of your Team."
			number={2}
			content="Some brands and businesses need a vendor. Well, that’s just not us. We’ve crossed it out from our virtual dictionaries. It’s dead to us. Instead, we’re a partner, enabler, and true collaborator. We’re a team extension and built around unification."
		/>
		<ProcessBlock
			title="Senior teams, aiming for stellar impact."
			number={3}
			content="All of our service, strategy, design and digital team members are senior-level, ready to take on the world to help you on your mission as a game-changing brand. This is intentional, and built around the logic that to win big, we have to think big."
		/>
		<ProcessBlock
			title="R is for real results."
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
