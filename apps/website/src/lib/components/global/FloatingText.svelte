<script lang="ts">
</script>

<section class="container">
	<h3>
		<slot />
	</h3>
</section>

<style lang="scss">
	section {
		text-align: center;
		height: 80vh;
		display: flex;
		align-items: center;
	}
	h3 {
		line-height: var(--line-lg);
		max-width: 50ch;
		text-align: left;
	}

	@media screen and (max-width: 768px) {
		h3 {
			line-height: var(--line-md);
		}
	}
</style>
