<script lang="ts">
	export let title: string;
	export let subtitle: string;
</script>

<div class="header">
	<h6 class="header__subtitle">{subtitle}</h6>
	<h4 class="header__title">{title}</h4>
</div>

<style lang="scss">
	.header {
		display: flex;
		flex-direction: column;
        gap: var(--space-3xs);
        margin: var(--space-md) 0;

        &__subtitle {
            font-size: var(--text-xs);
            text-transform: uppercase;
            font-weight: var(--fw-medium);
            color: var(--color-gray-600);
        }

        &__title {
            text-transform: capitalize;
            font-weight: var(--fw-medium);
        }
    }
</style>
