<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ session }) => {
		if (session?.user)
			return {
				redirect: '/',
				status: 302
			};

		return { status: 200 };
	};
</script>

<script lang="ts">
</script>


<slot />

<style lang="scss">
</style>
