<script lang="ts">
	import CardBase from '../global/CardBase.svelte';

	export let title: string;
</script>

<CardBase padding="0px">
	<div class="related">
		<header>
			<h5>{title}</h5>
		</header>

        <div class="body">
            <slot />
        </div>
	</div>
</CardBase>

<style lang="scss">
    header {
        padding: var(--space-xs);
        border-bottom: 1px solid var(--color-border);
    }

    .body {
        width: 100%;
    }
</style>
