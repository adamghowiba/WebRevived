<script lang="ts">
	import Action from '../button/Action.svelte';

	export let rowsPerPageOptions = [5, 10, 15, 20, 25, 30];
	export let rowsPerPage = rowsPerPageOptions[1];
	export let page = 0;
	export let rowSize: number;

	$: rowStart = page * rowsPerPage;
	$: rowEnd = (page + 1) * rowsPerPage;
</script>

<footer class="footer">
	<span>Rows per page: </span>
	<select on:change={() => (page = 0)} bind:value={rowsPerPage}>
		{#each rowsPerPageOptions as value}
			<option {value}>{value}</option>
		{/each}
	</select>

	<span>
		{rowStart + 1}-{rowEnd > rowSize ? rowSize : rowEnd} of {rowSize}
	</span>

	<div class="buttons">
		<Action
			on:click={() => page--}
			disabled={page === 0}
			icon={{ icon: 'ic:round-navigate-next', rotation: 2 }}
			hoverEffect="fill"
		/>
		<Action
			on:click={() => page++}
			disabled={rowEnd > rowSize}
			icon={{ icon: 'ic:round-navigate-next' }}
			hoverEffect="fill"
		/>
	</div>
</footer>

<style lang="scss">
	footer {
		display: flex;
		gap: 1rem;
		padding: var(--space-xs) 20px;
		justify-content: flex-end;
		align-items: center;
	}
	.buttons {
		display: flex;
		align-items: center;
	}
</style>
