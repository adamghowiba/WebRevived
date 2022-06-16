<script lang="ts">
	import { createEventDispatcher,getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
import TextInput from '../TextInput.svelte';
	import EditControls from './EditControls.svelte';
		
	export let isEditing = false;
	export let value: string | undefined = '';
	export let label: string;
	export let inputKey: string = '';

	let tempValue: string = value;

	const dispatch = createEventDispatcher();

	/* Retreive input erros from parent <EditInputWrap> */
	const errors = getContext<Writable<any>>('form:errors');

	const handleSaveEvent = () => {
		if (getInputError()) return;
		if (tempValue === value) return (isEditing = false);

		isEditing = false;
		value = tempValue;
		dispatch('save', { value, inputKey });
	};

	const handleCancelEvent = () => {
		tempValue = value;
		isEditing = false;
	};

	const getInputError = () => {
		if (!errors || !$errors[inputKey]) return;

		return $errors[inputKey];
	};
</script>

<tr class="data-wrap">
	<td class="label">{label}: </td>

	<td class="edit-wrap">
		<div class="editable">
			{#if isEditing}
				<!-- Input Wrapper -->
				<div class="editable__input-wrap">
					<div class="editable__input">
						<div class="input">
							<TextInput name={inputKey} bind:value={tempValue} isFocused />
						</div>

						<EditControls {isEditing} on:save={handleSaveEvent} on:cancel={handleCancelEvent} />
					</div>

					<!-- Input Errors -->
					{#if errors && $errors[inputKey]}
						<span class="editable__error">{$errors[inputKey]}</span>
					{/if}
				</div>
			{:else}
				<!-- Plain Text Wrapper -->
				<span class="editable__value" on:click={() => (isEditing = !isEditing)}>
					{value || '--'}
				</span>
			{/if}
		</div>
	</td>
</tr>

<style lang="scss">
	td {
		padding: var(--space-3xs) 0;
	}

	// .data-wrap {
	// }

	.input,
	.editable {
		min-width: 200px;
	}

	.editable {
		display: flex;
		align-items: center;
		width: 100%;
		vertical-align: middle;
		min-height: 37px;

		&__error {
			color: var(--color-error);
		}

		&__input-wrap {
			width: 100%;
		}

		&__input {
			display: flex;
			align-items: center;
			width: 100%;
			height: 100%;
		}

		&__value {
			border-radius: var(--br-sm);
			border: 1px solid transparent;
			padding: 7px 12px;
			width: 100%;
			height: 100%;

			transition: border 0.15s ease-in-out;
		}

		&__value:hover {
			border: 1px solid var(--color-gray-300);
			cursor: pointer;
		}
	}

	.edit-wrap {
		position: relative;
		padding-left: var(--space-xs);
		display: flex;
		align-items: center;
		gap: var(--space-2xs);
		text-align: left;
		width: 100%;
	}

	.label {
		text-align: right;
		font-weight: var(--fw-medium);
	}
</style>
