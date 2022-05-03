<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap, ScrollTrigger } from '$lib/gsap';

	export let title: string;
	export let desc: string;
	export let button: { text: string; href: string };

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
					end: "bottom bottom-=20%"
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

<article>
	<!-- <h1 bind:this={headingElement}>Hello</h1> -->
	<div class="headings" bind:this={headingWrapper}>
		{#each headings as heading}
			<div class="heading-wrap">
				<h1>{heading}</h1>
			</div>
		{/each}
	</div>
	<p>{desc}</p>
</article>

<style lang="scss">
	article {
		max-width: 45ch;
		display: flex;
		gap: var(--space-lg);
		flex-direction: column;

		p {
			line-height: var(--line-md);
		}
	}

	.headings {
		display: flex;
		flex-direction: column;
		gap: var(--space-2xs);
	}
	.heading-wrap {
		overflow: hidden;
	}

	/* Laptop */
	@media screen and (max-width: 1024px) {
		article {
			max-width: 65ch;
		}
	}
</style>
