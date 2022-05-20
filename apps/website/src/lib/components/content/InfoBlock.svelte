<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap, ScrollTrigger, Power4, Power2 } from '$lib/gsap';
	import Button from '../buttons/Button.svelte';

	export let desc: string;
	export let button: { text: string; href: string };
	export let headings: string[] = [];

	let headingsContainer: HTMLElement;
	let descriptionElement: HTMLElement;
	let buttonWrapElement: HTMLElement;

	function textRevealAnimation(container: HTMLElement) {
		if (!container) return;
		let headings = container.querySelectorAll('h1');

		let timeline = gsap.timeline({
			scrollTrigger: {
				trigger: headingsContainer,
				start: 'top bottom-=10%',
				end: 'bottom top+=15%',
			}
		});

		timeline.from(gsap.utils.toArray(headings), {
			yPercent: 102,
			duration: 0.75,
			ease: Power4.easeInOut
		});

		timeline.from(
			[descriptionElement, buttonWrapElement],
			{
				opacity: 0,
				duration: 0.5,
				ease: Power2.easeOut
			},
			'<'
		);

		return () => {
			timeline.scrollTrigger?.kill();
			timeline.kill();
		};
	}

	onMount(() => {
		let destory = textRevealAnimation(headingsContainer);

		return () => {
			if (destory) destory();
		};
	});
</script>

<article bind:this={headingsContainer}>
	<!-- <h1 bind:this={headingElement}>Hello</h1> -->
	<div class="headings">
		{#each headings as heading}
			<div class="heading-wrap">
				<h1>{heading}</h1>
			</div>
		{/each}
	</div>
	<p bind:this={descriptionElement}>{desc}</p>
	<div class="button-wrap" bind:this={buttonWrapElement}>
		<Button style="link" href={button.href} icon="mdi:arrow-right">{button.text}</Button>
	</div>
</article>

<style lang="scss">
	article {
		max-width: 50ch;
		display: flex;
		gap: var(--space-lg);
		flex-direction: column;

		p {
			line-height: var(--line-lg);
		}
	}

	.headings {
		display: flex;
		flex-direction: column;
	}
	.heading-wrap {
		overflow: hidden;
		padding-bottom: 4px;
	}

	/* Laptop */
	@media screen and (max-width: 1024px) {
		article {
			max-width: 65ch;
		}
	}
</style>
