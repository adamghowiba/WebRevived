<script context="module" lang="ts">
	import Navbar from '$lib/components/navbar/Navbar.svelte';
import { queryClientStore } from '$lib/stores/queryClient-store';
	import type { Load } from '@sveltejs/kit';

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
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
	let currentTab: string;

	const queryClient = new QueryClient();

	queryClientStore.set(queryClient);
</script>

<!-- <h6>Welcome {$session.user.email}</h6> -->
<Navbar />
<QueryClientProvider client={queryClient}>
	<slot />
</QueryClientProvider>

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
