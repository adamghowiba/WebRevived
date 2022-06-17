<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import DataTable from '$lib/components/datatable/DataTable.svelte';
	import type { AsyncStore } from '$lib/types/async';
	import type { DataTableCol, DataTableRow } from '$lib/types/table';
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';
	import Modal from '../Modal.svelte';
	import ModalFooter from '../ModalFooter.svelte';
	import ModalHeader from '../ModalHeader.svelte';

	export let isLoading: boolean = false;
	export let title: string;
	export let dataRows: any[];
	export let columns: DataTableCol[];
	export let dataId: string = 'id';
	export let selectedRows: number[] = [];

	const dispatch = createEventDispatcher();

	/* Dispatches an array of selected ids back to the parent to update the record. */
	const handleSaveEvent = () => {
		if (!dataRows) return;
		const selectedIds = selectedRows.map((rowIndex) => dataRows[rowIndex][dataId]);

		dispatch('save', selectedIds);
	};
</script>

<Modal title="Assign People" width="70%" on:clickOutside={() => dispatch('exit')}>
	<ModalHeader slot="header" {title} on:exit />

	<div class="body-wrap">
		<header>
			<!-- TODO: Weird bug causing items layout to misbehaive such as select in table footer, and table row hover -->
			<!-- <TextInput icon={{ location: 'left' }} name="search" value="" />
			<Button color="default" size="small" icon={{ icon: 'fluent:add-16-filled', size: 17 }}>
				New Rep
			</Button> -->
		</header>

		<div class="body">
			<slot>
				{#if dataRows}
					<DataTable
						{columns}
						rows={dataRows}
						tableStyles={{ header: { backgroundColor: 'transparent' } }}
						selectable
						bind:selectedRows
					/>
				{:else}
					<h4>Loading...</h4>
				{/if}
			</slot>
		</div>
	</div>

	<ModalFooter slot="footer">
		<div class="footer">
			{#if selectedRows?.length}
				<div class="footer__selected" transition:fly={{ y: 10, duration: 300 }}>
					<p class="footer__selected-text">{selectedRows.length} Rep selected</p>
					<p class="footer__clear" on:click={() => (selectedRows = [])}>Clear</p>
				</div>
			{/if}

			<div class="footer__save">
				<Button on:click={handleSaveEvent}>
					{#if !isLoading}
						Assign
					{:else}
						Loading...
					{/if}
				</Button>
			</div>
		</div>
	</ModalFooter>
</Modal>

<style lang="scss">
	.body-wrap {
		padding: var(--space-xs);
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.footer {
		width: 100%;
		display: flex;

		&__selected {
			display: flex;
			align-items: center;
			gap: var(--space-2xs);
		}

		&__clear:hover {
			cursor: pointer;
		}

		&__clear {
			color: var(--color-primary);
		}

		&__save {
			margin-left: auto;
		}
	}
</style>
