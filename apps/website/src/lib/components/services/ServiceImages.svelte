<script lang="ts">
	import { gsap, ScrollTrigger } from '$lib/gsap';
	import { onMount } from 'svelte';

	let sectionElement: HTMLElement;

	function scrollSkewAnimation() {
		let images = sectionElement.querySelectorAll('img');

		let proxy = { skew: 0 };
		let skewSetter = gsap.quickSetter(gsap.utils.toArray(images), 'skewY', 'deg');
		let clamp = gsap.utils.clamp(-15, 15); // don't let the skew go beyond 20 degrees.

		let trigger = ScrollTrigger.create({
			markers: true,
			onUpdate: (self) => {
				let skew = clamp(self.getVelocity() / -300);

				/* only do something if the skew is MORE severe. Remember,
				we're always tweening back to 0, so if the user slows their scrolling quickly,
				it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew. */
				if (Math.abs(skew) > Math.abs(proxy.skew)) {
					proxy.skew = skew;
					gsap.to(proxy, {
						skew: 0,
						duration: 0.8,
						ease: 'power3',
						overwrite: true,
						onUpdate: () => skewSetter(proxy.skew)
					});
				}
			}
		});

		return () => {
			trigger.kill();
		};
	}

	onMount(() => {
		let destory = scrollSkewAnimation();
		// ScrollTrigger.refresh();

		return () => destory();
	});

	export let images: [string, string];
</script>

<section class="section container" bind:this={sectionElement}>
	<figure>
		{#each images as image}
			<img src={image} alt="Website with hand pointing" />
		{/each}
	</figure>
</section>

<style lang="scss">
	figure {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-lg);
		row-gap: var(--space-6xl);
		margin-bottom: var(--space-5xl);

		img:nth-child(even) {
			position: relative;
			transform: translateY(var(--space-5xl));
		}

		img:hover {
			transform: scale(1.5);
		}
	}
</style>
