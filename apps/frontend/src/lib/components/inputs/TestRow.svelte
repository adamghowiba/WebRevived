<script lang="ts">
	import { clickOutside } from '$lib/actions/clickOutside';
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';
	import TextInput from './TextInput.svelte';

	export let isEditing = false;
	export let dataValue: string = 'Over Rice LLC.';
	export let inputName: string;
</script>

<tr class="data-wrap">
	<td class="cell cell--input">{inputName}</td>
	<td class="cell cell--value" style="padding: 0 20px;">{dataValue}</td>
</tr>

<style lang="scss">
	.cell {
		padding: var(--space-2xs) 0;
		&--input {
			text-align: right;
		}
		
		&--vlue {
			text-align: left;
		}
	}
	.data-wrap {
		// display: grid;
		// gap: var(--space-sm);
		// grid-template-columns: 1fr auto;
	}
	.editable {
		display: flex;
		align-items: center;
		border: 1px solid transparent;
		min-height: 37px;
		width: 100%;
		outline: none;
		max-width: 200px;
		border-radius: var(--br-sm);

		&:hover {
			border: 1px solid var(--color-gray-300);
			cursor: pointer;
		}

		&__input {
			width: 100%;
		}

		&__value {
			padding: 7px 12px;
			width: 100%;
			text-align: left;
			height: 100%;
		}
	}

	.edit-wrap {
		display: flex;
		align-items: center;
		gap: var(--space-2xs);
	}

	.controls {
		display: flex;
		gap: var(--space-2xs);

		.control {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 22px;
			height: 22px;
			border: 1px solid var(--color-gray);
			border-radius: 50%;
		}

		.control:hover {
			cursor: pointer;
		}

		&__save {
			background-color: var(--color-primary);
		}
	}

	.input-name {
		display: flex;
		align-items: center;
		font-weight: var(--fw-medium);
	}
</style>
