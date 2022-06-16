<script lang="ts">
	export let href: string;
</script>

<a {href} class="link">
	<slot />
</a>

<style lang="scss">
	.link {
		display: flex;
		align-items: center;
		min-width: 150px;
		min-height: 36px;
		padding: var(--space-2xs) var(--space-xs);

		&:hover {
			background-color: var(--color-gray-100);
		}
	}
</style>
