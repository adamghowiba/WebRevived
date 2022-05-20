<script lang="ts">
	import { gsap } from '$lib/gsap';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import Button from '$lib/components/buttons/Button.svelte';

	let openBlockIndex: number | null;
	let sectionElement: HTMLElement;

	function handleMobileClick(index: number) {
		if (openBlockIndex === index) return (openBlockIndex = null);
		openBlockIndex = index;
	}

	interface FooterLink {
		name: string;
		href: string;
	}
	interface FooterBlocks {
		group: string;
		links: FooterLink[];
	}

	const parlaxFooterAnimation = () => {
		let timeline = gsap.timeline({
			scrollTrigger: {
				start: 'top+=70% bottom',
				end: 'bottom+=70% bottom',
				trigger: sectionElement,
				scrub: 0.1
			}
		});

		timeline.from(sectionElement, { yPercent: -70 });

		return () => {
			timeline.scrollTrigger?.kill();
			timeline.kill();
		};
	};

	const FOOTER_BLOCKS: FooterBlocks[] = [
		{
			group: 'Company',
			links: [
				{ name: 'Home', href: '/about' },
				{ name: 'Services', href: '/about' },
				{ name: 'About', href: '/about' },
				{ name: 'Contact', href: '/about' }
			]
		},
		{
			group: 'Services',
			links: [
				{ name: 'Instagram', href: '/about' },
				{ name: 'Twitter', href: '/about' },
				{ name: 'LinkedIn', href: '/about' },
				{ name: 'Dribble', href: '/about' }
			]
		}
	];

	onMount(() => {
		let destory = parlaxFooterAnimation();

		return () => {
			destory();
		};
	});
</script>

<section class="footer-wrapper" bind:this={sectionElement}>
	<footer class="container--sm footer">
		<div class="footer__title">
			<h2>Let's Start<br />Something great together!</h2>

			<Button color="black" hoverCircle>Get Started</Button>
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
							<a href="">{link.name}</a>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</footer>
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

		h3 {
			font-size: var(--text-h3);
			max-width: 20ch;
			font-weight: var(--fw-medium);
		}
	}

	.block {
		display: flex;
		gap: var(--space-2xl);

		&__item {
			display: flex;
			flex-direction: column;
			gap: var(--space-md);
		}

		a {
			color: var(--color-black);
		}
	}

	a,
	p {
		color: var(--color-black);
		font-weight: var(--fw-medium);
	}

	/* Laptop */
	@media screen and (max-width: 1024px) {
		.footer {

			&__bottom {
				gap: var(--space-md);
			}

			h3, h3 a {
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
	}

</style>
