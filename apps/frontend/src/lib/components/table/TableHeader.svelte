<script lang="ts">
</script>

<thead>
	<slot />
</thead>

<style lang="scss">
	thead {
		text-transform: uppercase;
		background-color: var(--color-gray-200);
		font-weight: var(--fw-medium);
	}

	:global(.theme--dark thead) {
		background-color: transparent;
	}
</style>
