<script lang="ts">
</script>

<div class="dropdown">
	<slot />
</div>

<style lang="scss">
	.dropdown {
		position: relative;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
        border-radius: var(--br-sm);
		background-color: var(--color-surface);
		box-sizing: var(--shadow-card);
		border: 1px solid var(--color-border);
    }
</style>
