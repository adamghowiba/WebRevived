<script lang="ts">
	import Button from '../buttons/Button.svelte';
	import Hamburger from './Hamburger.svelte';
	import { gsap } from '$lib/gsap';
	import { onDestroy, onMount } from 'svelte';

	let timeline: gsap.core.Timeline;

	const LINKS: { name: string; href: string }[] = [
		{ name: 'About', href: '/about' },
		{ name: 'Services', href: '/services' },
		{ name: 'Login', href: '/login' }
	];

	const handleMouseEnter = (event: MouseEvent) => {
		const target = event.target as HTMLElement;
		const wordWrap = target.querySelectorAll('.word-wrap');

		let wordWrapOneChars = wordWrap[0].querySelectorAll('.char');
		let wordWrapTwoChars = wordWrap[1].querySelectorAll('.char');

		timeline = gsap.timeline();
		let firstWordTimeline = gsap.timeline();
		let secondWordTimeline = gsap.timeline();

		firstWordTimeline.to(
			wordWrapOneChars,
			{
				yPercent: -103,
				stagger: 0.02,
				duration: 0.3
			},
			'<'
		);

		secondWordTimeline.to(
			wordWrapTwoChars,
			{
				yPercent: -100,
				stagger: 0.02,
				duration: 0.3
			},
			'<'
		);

		timeline.add(firstWordTimeline, '<');
		timeline.add(secondWordTimeline, '<');
	};

	const handleMouseLeave = (event: MouseEvent) => {
		timeline.reverse();
	};

	onDestroy(() => {
		if (timeline) timeline.kill();
	});
</script>

<nav class="nav container">
	<a href="/">
		<img class="nav__logo" src="/images/logo_white.png" alt="WebRevived logo" />
	</a>

	<div class="links">
		{#each LINKS as link}
			<a
				class="hover"
				href={link.href}
				on:mouseenter={handleMouseEnter}
				on:mouseleave={handleMouseLeave}
			>
				{#each Array(2) as _}
					<span class="word-wrap">
						{#each link.name as char}
							<span class="char">{char}</span>
						{/each}
					</span>
				{/each}
				<!-- <span>About</span> -->
			</a>
		{/each}
		<!-- <a href="/about">About</a>
		<a href="/services">Services</a>
		<a href="/contact">Login</a> -->
		<Button href="/contact">Talk To Us</Button>
	</div>

	<div class="hamburger">
		<Hamburger />
	</div>
</nav>

<style lang="scss">
	.nav {
		padding: var(--space-sm);
		display: flex;
		justify-content: space-between;
		align-items: center;

		&__logo {
			position: relative;
			top: 3px;
			width: 100%;
			max-width: 55px;
		}

		a:hover {
		}
	}
	.hover {
		display: flex;
		flex-direction: column;
		position: relative;
		overflow: hidden;

		span {
			display: inline-block;
			color: inherit;
		}

		.word-wrap:nth-child(even) {
			position: absolute;
			transform: translateY(100%);
		}
	}
	.links {
		display: flex;
		align-items: center;
		gap: var(--space-3xl);
	}
	.hamburger {
		display: none;
	}

	/* LAPTOP */
	@media screen and (max-width: 1024px) {
		.links {
			gap: var(--space-lg);
		}
	}

	/* TABLET */
	@media screen and (max-width: 768px) {
		.links {
			display: none;
		}
		.hamburger {
			display: flex;
		}
	}
</style>
