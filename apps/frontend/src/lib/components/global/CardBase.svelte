<script lang="ts">
    export let padding: string = 'var(--space-xs)';
</script>

<div class="card" style:padding>
    <slot />
</div>

<style lang="scss">
    .card {
        width: 100%;
        padding: var(--space-xs);
        border: 1px solid var(--color-border);
        background-color: var(--color-surface);
        box-shadow: var(--shadow-card);
    }
</style>