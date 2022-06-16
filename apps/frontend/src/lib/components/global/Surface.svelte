<script lang="ts">

</script>

<div class="surface">
    <slot />
</div>

<style lang="scss">
    .surface {
        width: 100%;
        padding: var(--space-xs);
        border: 1px solid var(--color-border);
        background-color: var(--color-surface);
        box-shadow: var(--shadow-card);
    }
</style>