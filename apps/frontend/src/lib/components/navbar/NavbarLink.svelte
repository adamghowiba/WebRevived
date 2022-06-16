<script lang="ts" context="module">
</script>

<script lang="ts">
	import { goto } from '$app/navigation';
import { page } from '$app/stores';
	import type { Link } from '$lib/types/interface';
	import Icon from '@iconify/svelte';
	import { createEventDispatcher } from 'svelte';
	import NavDropdown from './NavDropdown.svelte';
	import NavDropdownLink from './NavDropdownLink.svelte';

	export let href = undefined;
	export let dropdown: Link[] = undefined;
	export let icon: string | undefined = undefined;
	$: active = $page.url.pathname.split('/')[1] === href.replace('/', '');
	
	let isDropdownOpen: boolean = false;

	const dispatch = createEventDispatcher();

	const handleLinkClick = () => {
		if (!dropdown) {
			dispatch('linkClick');
			return goto(href);
		}

		isDropdownOpen = !isDropdownOpen;
	};
</script>

<div class="link" class:active on:click={handleLinkClick}>
	{#if icon}
		<Icon {icon} color="var(--color-text-body)" width={18} height={18} />
	{/if}

	<slot />

	{#if isDropdownOpen}
		<div class="dropdown">
			<NavDropdown>
				{#if dropdown}
					{#each dropdown as link}
						<NavDropdownLink href={link.href}>{link.name}</NavDropdownLink>
					{/each}
				{/if}
			</NavDropdown>
		</div>
	{/if}

	{#if dropdown}
		<Icon icon="akar-icons:chevron-down" />
	{/if}
</div>

<style lang="scss">
	.link {
		display: flex;
		align-items: center;
		gap: var(--space-2xs);
		padding: var(--space-xs) 12px;
		position: relative;
		font-size: var(--text-body);

		&:hover {
			cursor: pointer;
		}

		&.active {
			border-bottom: 2px solid var(--color-primary);
		}
	}

	.dropdown {
		position: absolute;
		width: max-content;
		left: 0;
		z-index: 10;
		bottom: 0;
		transform: translateY(103%);
	}
</style>
