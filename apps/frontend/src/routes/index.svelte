<script lang="ts">
	import { session } from '$app/stores';
import Button from '$lib/components/button/Button.svelte';
	import PageHeader from '$lib/components/global/PageHeader.svelte';
	import { isRole } from '$lib/utils/role-utils';
	import AdminHome from '$lib/views/home/AdminHome.svelte';


</script>

<header class="container">
	<PageHeader title="Dashboard" subtitle="Overview" />
</header>

<main class="container ">
	{#if isRole($session.user.role, 'ADMIN', 'DEVELOPER')}
		<AdminHome />
	{/if}
</main>


<style lang="scss">
</style>
