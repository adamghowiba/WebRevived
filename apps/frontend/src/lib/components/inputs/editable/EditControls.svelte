<script lang="ts">
	import Icon from '@iconify/svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let isEditing: boolean = false;
</script>

<div class="controls" class:active={isEditing}>
	<div class="control controls__save" on:click={() => dispatch('save')}>
		<Icon icon="bi:check-lg" width={15} height={15} color="white" />
	</div>
	<div class="control controls__cancel" on:click={() => dispatch('cancel')}>
		<Icon icon="bi:x" width={17} height={17} color="var(--color-gray-700)" />
	</div>
</div>

<style lang="scss">
	.controls {
		display: flex;
		gap: var(--space-2xs);
		opacity: 0;
		visibility: hidden;
		padding: 0 8px;

		&.active {
			visibility: visible;
			opacity: 1;
		}

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
</style>
