<script lang="ts">
	import { session } from '$app/stores';
	import PageHeader from '$lib/components/global/PageHeader.svelte';
	import { isRole } from '$lib/utils/role-utils';
	import AdminHome from '$lib/views/home/AdminHome.svelte';
</script>

<header class="container">
	<PageHeader title="Dashboard" subtitle="Overview" />
</header>

{#if isRole($session.user.role, 'ADMIN', 'DEVELOPER')}
	<main class="container ">
		<AdminHome />
	</main>
{/if}

<style lang="scss">
</style>
