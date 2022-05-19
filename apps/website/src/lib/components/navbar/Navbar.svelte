<script lang="ts">
import { LINKS } from '$lib/constants/links';
	import { gsap } from '$lib/gsap';
	import { createEventDispatcher, onDestroy } from 'svelte';
	import Button from '../buttons/Button.svelte';
	import Hamburger from './Hamburger.svelte';

	let timeline: gsap.core.Timeline;
	export let isMobileNavbarOpen: boolean ;

	const dispatch = createEventDispatcher();

	const handleMouseEnter = (event: MouseEvent) => {
		const target = event.target as HTMLElement;

		const wordWrap = target.querySelectorAll('.word-wrap');

		let chars = target.querySelectorAll('.char');

		timeline = gsap.timeline();

		timeline.fromTo(
			chars,
			{
				yPercent: 0
			},
			{
				yPercent: -103,
				stagger: 0.02,
				duration: 0.25
			}
		);
	};

	const handleMouseLeave = (event: MouseEvent) => {
		timeline.reverse();
	};

	const handleHamburgerClick = () => {
		isMobileNavbarOpen = !isMobileNavbarOpen;
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
			</a>
		{/each}
		<!-- <a href="/about">About</a>
		<a href="/services">Services</a>
		<a href="/contact">Login</a> -->
		<Button href="/contact" hoverCircle>Talk To Us</Button>
	</div>

	<div class="hamburger">
		<Hamburger open={isMobileNavbarOpen} on:click={handleHamburgerClick} />
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
			text-decoration: none;
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
