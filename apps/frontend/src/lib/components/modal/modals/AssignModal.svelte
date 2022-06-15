<script lang="ts">
	import { browser } from '$app/env';
	import Button from '$lib/components/button/Button.svelte';
	import DataTable from '$lib/components/datatable/DataTable.svelte';
	import TextInput from '$lib/components/inputs/TextInput.svelte';
	import type { DataTableCol, DataTableRow } from '$lib/types/table';
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';
	import Modal from '../Modal.svelte';
	import ModalFooter from '../ModalFooter.svelte';
	import ModalHeader from '../ModalHeader.svelte';

	let rows: DataTableRow[];
    
	const dispatch = createEventDispatcher();
    
	/* Dispatches an array of selected data back to the parent to update the record. */
	const handleSaveEvent = () => {
		const selectedData = selectedRows.map((row) => rows[row]);
		dispatch('save', selectedData);
	};

	let selectedRows: number[] = [];
</script>

<Modal title="Assign People" width="70%">
	<ModalHeader slot="header" title="Assign Rep" on:exit />

	<div class="body-wrap">
		<header>
			<!-- TODO: Weird bug causing items layout to misbehaive such as select in table footer, and table row hover -->
			<!-- <TextInput icon={{ location: 'left' }} name="search" value="" />
			<Button color="default" size="small" icon={{ icon: 'fluent:add-16-filled', size: 17 }}>
				New Rep
			</Button> -->
		</header>

		<div class="body">
			<slot more="wild" />
			<!-- <DataTable
				{columns}
				{rows}
				tableStyles={{ header: { backgroundColor: 'transparent' } }}
				selectable
				bind:selectedRows
			/> -->
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
				<Button on:click={handleSaveEvent}>Save</Button>
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
