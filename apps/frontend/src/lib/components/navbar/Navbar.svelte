<script lang="ts" context="module">
	type NavbarLinks = Link[] & { dropdown?: Link[] }[];

	const NAVBAR_LINKS: NavbarLinks = [
		{
			name: 'Home',
			href: '/',
			icon: 'bx:home'
		},
		{ name: 'Accounts', href: '/accounts', icon: 'bx:home' },
		{ name: 'Projects', href: '/project', icon: 'bx:home' },
		{ name: 'Contacts', href: '/contacts', icon: 'bx:home' },
		{ name: 'Forms', href: '/form', icon: 'bx:home' },
		{
			name: 'Extra',
			href: '/extra',
			dropdown: [
				{ name: 'Form Inputs', href: '' },
				{ name: 'Form Inputs', href: '' },
				{ name: 'Form Inputs', href: '' },
				{ name: 'Form Inputs', href: '' },
				{ name: 'Form Inputs', href: '' },
				{ name: 'Form Inputs', href: '' },
				{ name: 'Form Inputs', href: '' },
				{ name: 'Form Inputs', href: '' },
				{ name: 'Form Inputs', href: '' },
				{ name: 'Form Inputs', href: '' },
				{ name: 'Extras', href: '' }
			]
		}
	];
</script>

<script lang="ts">
	import { themeStore } from '$lib/stores/theme-store';
	import type { Link } from '$lib/types/interface';
	import Button from '../button/Button.svelte';
	import NavbarLink from './NavbarLink.svelte';
	import Topbar from './Topbar.svelte';

	let activeLinkIndex: number = 0;;
</script>

<div class="nav-wrapper">
	<div class="topbar container">
		<Topbar />
	</div>

	<hr />

	<nav class="nav container">
		<div class="nav__links">
			{#each NAVBAR_LINKS as link, i}
				<NavbarLink
					on:linkClick={() => (activeLinkIndex = i)}
					href={link.href}
					dropdown={link.dropdown}
					icon={link?.icon}
				>
					{link.name}
				</NavbarLink>
			{/each}
		</div>

		<Button color="purple" size="small" icon={{ location: 'left' }}>Add</Button>
	</nav>
</div>

<style lang="scss">
	.nav-wrapper {
		background-color: var(--color-surface);
	}

	.nav {
		display: flex;
		border-bottom: 1px solid var(--color-border);
		justify-content: space-between;
		align-items: center;

		&__links {
			display: flex;
		}
	}

	.topbar {
		padding-top: var(--space-2xs);
		padding-bottom: var(--space-2xs);
	}

	hr {
		border: none;
		margin: 0;
		padding: 0;
		border-top: 1px solid var(--color-border);
	}
</style>
