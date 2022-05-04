<script lang="ts">
	import Icon from '@iconify/svelte';
import { slide } from 'svelte/transition';
	import PlusButton from '../buttons/PlusButton.svelte';

	let openBlockIndex: number | null;

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

	const FOOTER_BLOCKS: FooterBlocks[] = [
		{
			group: 'Company',
			links: [
				{ name: 'About us', href: '/about' },
				{ name: 'Services', href: '/about' },
				{ name: 'Creative Studio', href: '/about' },
				{ name: 'Carrers', href: '/about' },
				{ name: 'Contact Us', href: '/about' },
				{ name: 'Blog', href: '/about' }
			]
		},
		{
			group: 'Services',
			links: [
				{ name: 'SEO', href: '/about' },
				{ name: 'Content Marketing', href: '/about' },
				{ name: 'Branding', href: '/about' },
				{ name: 'Social Ads', href: '/about' },
				{ name: 'CRO', href: '/about' },
				{ name: 'Email Marketing', href: '/about' }
			]
		},
		{
			group: 'Expertise',
			links: [
				{ name: 'SaaS', href: '/about' },
				{ name: 'B2B', href: '/about' },
				{ name: 'eCommerece', href: '/about' },
				{ name: 'Healthcare', href: '/about' },
				{ name: 'Fintech', href: '/about' },
				{ name: 'Crypto', href: '/about' }
			]
		}
	];
</script>

<div class="container section">
	<hr />

	<footer>
		<div class="info">
			<img class="nav__logo" src="/images/logo.png" alt="WebRevived logo" />
			<p>
				We're headquartered in New York with offices in LA and Miami but you can also find our team
				members in London and Dubai.
			</p>

			<div class="info__contact">
				<h6>Contact</h6>
				<a href="tel:407 924 6902">407 924 6902</a>
				<a href="mailto:adam@webrevived.com">adam@webrevived.com</a>
				<a href="mailto:adam@webrevived.com">1020 Waverly Dr. Longwood FL</a>
			</div>
		</div>

		<nav>
			{#each FOOTER_BLOCKS as block, i}
				{@const isOpen = openBlockIndex === i}

				<div class="nav-block">
					<div class="mobile-header" on:click={() => handleMobileClick(i)}>
						<h5>{block.group}</h5>

						<Icon icon="bx:chevron-right" width={24} height={24} rotate="{isOpen ? 1 : 0}" />
					</div>
					<div
						class="links links--mobile"
						class:active={isOpen}
						transition:slide={{ duration: 270 }}
					>
						{#each block.links as link}
							<a href={link.href}>{link.name}</a>
						{/each}
					</div>
				</div>
			{/each}
		</nav>
	</footer>
</div>

<style lang="scss">
	footer {
		display: flex;
		justify-content: space-between;
		gap: var(--space-md);
	}
	.section {
		padding-bottom: var(--space-4xl);
	}
	a,
	p,
	h6 {
		font-size: var(--text-h6);
		font-weight: 400;
	}

	h5 {
		font-weight: var(--fw-bold);
	}

	nav {
		display: flex;
		justify-content: space-between;
		justify-self: stretch;
		flex: 1 0 auto;

		.nav-block {
			display: flex;
			flex-direction: column;
			// gap: var(--space-sm);
		}

		.links {
			display: flex;
			flex-direction: column;
			gap: var(--space-2xs);
			padding-top: var(--space-xs);
		}
		.nav-block.open a {
			display: block;
		}
	}

	.info {
		display: grid;
		align-items: center;
		width: max-content;
		row-gap: var(--space-md);
		column-gap: var(--space-lg);
		grid-template-columns: auto 1fr;
		grid-template-rows: auto auto;

		&__contact {
			gap: var(--space-sm);
			display: flex;
			flex-direction: column;
			grid-column: 1/-1;
		}
		p {
			max-width: 35ch;
		}
		img {
			max-width: 50px;
		}
	}

	.mobile-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	hr {
		border: none;
		border-top: 4px solid white;
		margin-bottom: var(--space-2xl);
	}

	@media screen and (max-width: 1024px) {
		.container {
			max-width: 690px;
		}
		footer {
			flex-direction: column;
		}

		.info {
			display: flex;
			width: auto;

			&__contact {
				display: none;
			}
		}

		nav {
			flex-direction: column;
			gap: var(--space-md);

			a {
			}

			.links {
				opacity: 0;
				padding-top: 0;
				display: none;
			}
			.links--mobile {
				pointer-events: none;
			}
			
			.nav-block {
				padding: var(--space-xs) 0;
				border-bottom: 4px solid var(--color-white);
			}
		}
		
		.active.links {
			padding-top: var(--space-2xs);
			max-height: 500px;
			opacity: 1;
			display: flex;
		}
		.active.links--mobile {
			pointer-events: all;
		}
	}
</style>
