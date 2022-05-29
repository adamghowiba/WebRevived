<script lang="ts">
	import { browser } from '$app/env';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import Button from '$lib/components/buttons/Button.svelte';
	import { gsap } from '$lib/gsap';
	import { onMount } from 'svelte';

	let openBlockIndex: number | null;
	let sectionElement: HTMLElement;
	let paralaxAnimation: gsap.core.Timeline;

	interface FooterLink {
		name: string;
		href: string;
		newTab?: boolean;
	}
	interface FooterBlocks {
		group: string;
		links: FooterLink[];
	}

	const parlaxFooterAnimation = () => {
		paralaxAnimation = gsap.timeline({
			scrollTrigger: {
				start: () => 'top+=70% bottom',
				end: () => 'bottom+=70% bottom',
				trigger: sectionElement,
				scrub: 0.1
			}
		});

		paralaxAnimation.from(sectionElement, { yPercent: -70 });

		return () => {
			paralaxAnimation.scrollTrigger?.kill();
			paralaxAnimation.kill();
		};
	};

	const FOOTER_BLOCKS: FooterBlocks[] = [
		{
			group: 'Company',
			links: [
				{ name: 'Home', href: '/' },
				{ name: 'Services', href: '/services' },
				{ name: 'About', href: '/about' },
				{ name: 'Contact', href: '/contact' }
			]
		},
		{
			group: 'Services',
			links: [
				{ name: 'Instagram', href: 'https://instagram.com', newTab: true },
				{ name: 'Twitter', href: 'https://twitter.com', newTab: true },
				{ name: 'LinkedIn', href: 'https://linkedin.com', newTab: true },
				{ name: 'Dribble', href: 'https://dribbble.com', newTab: true }
			]
		}
	];
	afterNavigate(() => {
		paralaxAnimation.scrollTrigger?.refresh();
	});

	onMount(() => {
		let destory = parlaxFooterAnimation();

		return () => {
			destory();
		};
	});
</script>

<section class="no-overflow">
	<section class="footer-wrapper" bind:this={sectionElement}>
		<footer class="container--sm footer">
			<div class="footer__title">
				<h2>Let's Start<br />Something great together!</h2>

				<Button color="black" href="/contact" hoverCircle>Get Started</Button>
			</div>

			<div class="footer__bottom">
				<!-- Footer Contact Information -->
				<div class="footer__contact">
					<p>Drop us a line and we'll get in touch.</p>

					<h3>
						<a href="mailto:malcolm@abdigital.studio">malcolm@abdigital.studio</a> Or
						<a href="/contact" class="underline">Contact Us</a>
					</h3>
				</div>

				<!-- Footer Blocks -->
				<div class="block">
					{#each FOOTER_BLOCKS as block}
						<div class="block__item">
							{#each block.links as link}
								<a
									class="block__link"
									target={link.newTab ? '__blank' : ''}
									rel="noopener noreferrer"
									href={link.href}>{link.name}</a
								>
							{/each}
						</div>
					{/each}
				</div>
			</div>
		</footer>

		<div class="container--sm disclaimer">
			<span class="terms">© 2022 AB Digital Studio, LLC</span>

			<span>
				Built by <a href="https://webrevived.com" class="underline">Web Revived </a> with ❤️
			</span>
		</div>
	</section>
</section>

<style lang="scss">
	.underline {
		text-decoration: underline;
	}

	.footer-wrapper {
		background-color: white;
	}

	.footer {
		padding-top: var(--space-section-base);
		padding-bottom: var(--space-section-base);
		display: flex;
		flex-direction: column;
		gap: var(--space-section-base);
		color: var(--color-black);

		&__bottom {
			display: flex;
			gap: var(--space-xl);
			justify-content: space-between;
		}

		&__contact {
			display: flex;
			flex-direction: column;
			gap: var(--space-md);
		}

		&__title {
			display: flex;
			flex-direction: column;
			gap: var(--space-xl);
		}

		h3,
		h3 a {
			font-size: var(--text-h3);
			max-width: 20ch;
			font-weight: var(--fw-medium);
		}
	}

	.block {
		display: flex;
		gap: var(--space-6xl);

		&__item {
			display: flex;
			flex-direction: column;
			gap: var(--space-md);
		}
	}

	.disclaimer {
		display: flex;
		justify-content: space-between;
		padding-bottom: var(--space-md);

		a {
			font-weight: inherit;
			font-size: inherit;
		}

		span {
			opacity: 0.7;
			display: block;
			font-size: 16px;
			color: var(--color-black);
		}
	}

	a {
		transition: opacity 0.15s linear;
	}

	a:hover {
		opacity: 0.7;
	}

	a,
	p {
		color: var(--color-black);
		font-weight: var(--fw-medium);
	}

	/* Laptop */
	@media screen and (max-width: 1024px) {
		.block {
			gap: var(--space-5xl);
		}

		.footer {
			&__bottom {
				gap: var(--space-md);
			}

			h3,
			h3 a {
				font-size: var(--text-h4);
			}
		}
	}

	/* Mobile Large */
	@media screen and (max-width: 597px) {
		.footer {
			&__bottom {
				flex-direction: column;
				gap: var(--space-xl);
			}
		}

		.disclaimer {
			flex-direction: column;
			gap: var(--space-md);
		}
	}
</style>
