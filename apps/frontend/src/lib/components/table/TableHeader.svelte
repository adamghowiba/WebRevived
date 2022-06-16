<script lang="ts">

	export let backgroundColor: string = 'var(--color-gray-200)'
</script>

<thead style:background-color={backgroundColor}>
	<slot />
</thead>

<style lang="scss">
	thead {
		text-transform: uppercase;
		font-weight: var(--fw-medium);
	}

	:global(.theme--dark thead) {
		background-color: transparent;
	}
</style>
