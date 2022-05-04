<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '../buttons/Button.svelte';
	import LocalIcon from '../global/LocalIcon.svelte';
	import TextBreak from '../global/TextBreak.svelte';
	import { gsap, Power2, Power3 } from '$lib/gsap';

	const animationSvg = () => {
		const icon = document.querySelector('.wheel__icon');
		if (!icon) return;

		let rect = icon.querySelector('rect');
		let wheelCircle = icon.querySelectorAll('#wheel-circle');
		let wheelBlackCircle = icon.querySelectorAll('#wheel-black-circle');

		let timeline = gsap.timeline();

		timeline.from(rect, {
			width: 0,
			duration: 2.4,
			ease: Power3.easeInOut
		});

		timeline.from(wheelBlackCircle, {
			opacity: 0,
			stagger: {
				ease: Power2.easeInOut,
				amount: 0.4
			},
			ease: Power3.easeInOut
		});

		timeline.from(wheelCircle, {
			opacity: 0,
			stagger: {
				ease: Power2.easeInOut,
				amount: 0.4
			}
		}, '<');

		return timeline;
	};

	onMount(() => {
		let tween = animationSvg();

		return () => {
			if (tween) tween.kill();
		};
	});
</script>

<section class="section--sm">
	<div class="container">
		<header>
			<h1 class="title">
				We Help Impactful Brands Build <TextBreak /> <br /> Copunding Growth.
			</h1>
			<p class="body--lg">
				Business marketing used to be about "fitting in" with everyone else. Today, it's about
				standing out.
			</p>
			<Button
				style="none"
				icon="mdi:arrow-right-drop-circle-outline"
				iconStyle={{ rotation: '90deg' }}
			>
				Explore
			</Button>
		</header>
	</div>
	<div class="wheel">
		<div class="wheel__icon">
			<LocalIcon icon="wheel" />
		</div>
	</div>
</section>

<style lang="scss">
	.container {
		/* Screen Height Minus Navbar & space-sm padding */
		height: calc(100vh - 260px);
	}
	.wheel {
		position: absolute;
		bottom: 0;
		width: 100%;
		// position: absolute;
		// margin-top: var(--space-4xl);

		&__icon {
			position: absolute;
			width: 100%;
			left: 0;
			bottom: 0;
		}
	}
	header {
		max-width: 80ch;
		display: flex;
		gap: var(--space-2xs);
		flex-direction: column;
	}
	p {
		line-height: var(--line-lg);
		margin-bottom: var(--space-md);
	}

	@media screen and (max-width: 425px) {
		.wheel {
			margin-top: -3rem;

			&__icon {
				transform: translateY(-70%);
			}
		}
	}
</style>
