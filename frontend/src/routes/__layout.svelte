<script context="module" lang="ts">
	import Tab from '$lib/components/tab/Tab.svelte';
	import { tabs } from '$lib/stores/tabs-store';
	import type { Load } from '@sveltejs/kit';
	import IndexOld from './indexOld.svelte';

	export const load: Load = async ({ session, url }) => {
		if (!session?.user?.email)
			return {
				status: 302,
				redirect: '/auth/login'
			};

		return {
			status: 200
		};
	};
</script>

<script lang="ts">
	let currentTab: string;
</script>

<nav>
	<h5>Nav</h5>
	<a href="/account">Accounts</a>
	<a href="/projects">Projects</a>
</nav>

<section>
	<Tab bind:currentTab />

	{#each $tabs as tab}
		<div class="tab-wrapper" class:active={currentTab === tab.name}>
			<!-- <HomeScreen screenName={currentTab} /> -->
			<!-- <slot /> -->
			<IndexOld />
		</div>
	{/each}
</section>
<!-- <h6>Welcome {$session.user.email}</h6> -->
<slot />

<style lang="scss">
	nav {
		display: flex;
		flex-direction: column;
		padding: 3rem;

		a {
			text-decoration: underline;
			color: lightblue;
		}
	}
	.tab-wrapper {
		display: none;

		&.active {
			display: block;
		}
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
