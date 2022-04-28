<script lang="ts">
	export let screenName: string;
	let count = 0;
</script>

<section>
	<h4>Screen: {screenName}</h4>
	<h5>Count: {count}</h5>
	<button on:click={() => count++}>Increase</button>
</section>

<style lang="scss">
</style>
