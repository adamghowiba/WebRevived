<script lang="ts">
	import { LINKS } from '$lib/constants/links';
	import { gsap, ScrollTrigger } from '$lib/gsap';
	import { destoryTimelines } from '$lib/gsap-utils';
	import { createEventDispatcher, onMount } from 'svelte';

	let navWrapperElement: HTMLElement;

	const dispatch = createEventDispatcher();

	const scrollAwayTrigger = () => {
		const trigger = ScrollTrigger.create({
			trigger: navWrapperElement,
			start: 'bottom bottom-=5%',
			end: 'bottom bottom',
			onLeave: () => {
				dispatch('scrollAway');
			}
		});

		return () => {
			trigger.kill();
		};
	};

	const open = (node: HTMLElement) => {
		const timeline = gsap.timeline();
		let navLinks = node.querySelectorAll('.nav-link');
		let footerBlocks = node.querySelectorAll('.footer__block');

		timeline.from(node, {
			height: 0,
			ease: 'Power3.easeInOut',
			duration: 1
		});
		timeline.from(
			navLinks,
			{
				opacity: 0,
				xPercent: -50,
				autoAlpha: 1,
				stagger: 0.086
			},
			'<+=0.3'
		);
		timeline.from(
			footerBlocks,
			{
				opacity: 0,
				yPercent: 50,
				duration: 0.5,
				stagger: 0.1
			},
			'<+=0.5'
		);

		return {
			duration: timeline.totalDuration() * 1000,
			tick: (t: number) => {
				timeline.progress(t);
			}
		};
	};

	onMount(() => {
		const destory = scrollAwayTrigger();

		return () => {
			destory();
		};
		// const timeline = openAniamtion();
		// return () => {
		// 	timeline.kill();
		// };
	});
</script>

<section class="nav-wrapper" transition:open>
	<nav>
		{#each LINKS as link}
			{#if link.name !== 'Login'}
				<a class="nav-link" href={link.href}>{link.name}</a>
			{/if}
		{/each}
		<a class="nav-link" href="contact">contact</a>
	</nav>

	<footer class="footer">
		<div class="footer__block">
			<a href="tel:4079246902">+1 407 924 6902</a>
			<a href="mailto:malcom@abdigitalstudio.com">malcom@abdigitalstudio.com</a>
		</div>
	</footer>
</section>

<style lang="scss">
	.nav-wrapper {
		position: absolute;
		width: 100%;
		height: calc(100vh - 113px);
		background-color: var(--color-black);
		z-index: 100;
		padding: var(--space-md);
		overflow: hidden;
	}

	.footer {
		display: flex;
		gap: var(--space-md);
		position: absolute;
		bottom: var(--space-md);
		margin-top: auto;
		font-size: var(--text-h5);

		a {
			color: var(--color-white);
		}

		&__block {
			display: flex;
			flex-direction: column;
			gap: var(--space-xs);
		}
	}

	nav {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
		margin-top: var(--space-5xl);

		a {
			font-size: 66px;
			text-transform: lowercase;
		}
	}
</style>
