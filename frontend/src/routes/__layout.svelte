<script context="module" lang="ts">
	import { session } from '$app/stores';
	import type { Load } from '@sveltejs/kit';

	// export const load: Load = async ({ session, url }) => {
	// 	if (!session?.user?.email)
	// 		return {
	// 			status: 302,
	// 			redirect: '/auth/login'
	// 		};

	// 	return {
	// 		status: 200
	// 	};
	// };
</script>

<!-- <h4>Welcome {$session.user.email}</h4> -->
<h4>WebRevived admin.</h4>
<slot />

<style lang="scss">
</style>
