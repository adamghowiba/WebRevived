<script lang="ts">
	import CardBase from '../global/CardBase.svelte';
	import Table from '../table/Table.svelte';
	import TableBody from '../table/TableBody.svelte';
	import TableCell from '../table/TableCell.svelte';
	import TableFooter from '../table/TableFooter.svelte';
	import TableHeader from '../table/TableHeader.svelte';
	import TableRow from '../table/TableRow.svelte';
	import Skeleton from './Skeleton.svelte';

	export let rows: number = 5;
</script>

<CardBase padding="0">
	<Table>
		<TableHeader backgroundColor="transparent">
			<TableRow padding="15px 10px">
				<TableCell>
					<Skeleton height="1em" width="1.5em" />
				</TableCell>
				<TableCell>
					<Skeleton height="1em" width="3rem" />
				</TableCell>
				<TableCell>
					<Skeleton height="1em" width="6rem" />
				</TableCell>
				<TableCell>
					<Skeleton height="1em" width="4rem" />
				</TableCell>
			</TableRow>
		</TableHeader>

		<TableBody>
			{#each Array(rows) as _}
				<TableRow padding="10px">
					<TableCell>
						<Skeleton height="1em" width="1.5em" />
					</TableCell>
					<TableCell>
						<Skeleton height="1em" width="{Math.floor(Math.random() * 5) + 3}rem" />
					</TableCell>
					<TableCell>
						<Skeleton height="1em" width="{Math.floor(Math.random() * 5) + 3}rem" />
					</TableCell>
					<TableCell>
						<Skeleton height="1em" width="{Math.floor(Math.random() * 5) + 3}rem" />
					</TableCell>
				</TableRow>
			{/each}
		</TableBody>
	</Table>
	<footer>
		<TableCell padding="10px 10px 10px 0px">
			<Skeleton height="0.8em" width="4em" />
		</TableCell>
		<TableCell padding="10px">
			<Skeleton height="0.8em" width="1.5em" />
		</TableCell>
		<TableCell padding="10px">
			<Skeleton height="0.8em" width="1.5em" />
		</TableCell>
	</footer>
</CardBase>

<style lang="scss">
	footer {
		padding: var(--space-2xs) 0;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: 100%;
	}
</style>
