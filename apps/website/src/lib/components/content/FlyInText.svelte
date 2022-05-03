<!-- TODO: unimplemented -->

<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap, ScrollTrigger } from '$lib/gsap';

	export let headings: string[] = ['No Fluff.', 'High Impact', 'No penny wasted'];

	let headingElement: HTMLElement;
	let headingWrapper: HTMLElement;

	function textRevealAnimation(node: HTMLElement) {
		if (!headingWrapper) return;
		let headings = headingWrapper.querySelectorAll('h1');

		headings.forEach((heading) => {
			gsap.from(heading, {
				yPercent: 130,
				duration: 1.2,
				ease: 'Power3.easeOut',
				scrollTrigger: {
					trigger: headingWrapper,
					markers: true,
					start: 'top bottom-=20%',
					end: 'bottom bottom-=20%'
				}
			});
		});
	}

	async function registerAnimations() {
		textRevealAnimation(headingElement);
	}

	onMount(() => {
		registerAnimations();
	});
</script>

<div class="headings" bind:this={headingWrapper}>
	{#each headings as heading}
		<div class="heading-wrap">
			<h1>{heading}</h1>
		</div>
	{/each}
</div>

<style lang="scss">
	.headings {
		display: flex;
		flex-direction: column;
		gap: var(--space-2xs);
	}
	.heading-wrap {
		overflow: hidden;
		padding-bottom: 4px;
	}
</style>
