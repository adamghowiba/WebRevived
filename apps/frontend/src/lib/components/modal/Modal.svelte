<script lang="ts">
	import { clickOutside } from '$lib/actions/clickOutside';
	import type { PartialIcon } from '$lib/types/icon';
	import { createEventDispatcher, onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import Action from '../button/Action.svelte';
	import Button from '../button/Button.svelte';
	import Overlay from '../global/Overlay.svelte';

	export let title: string = undefined;
	export let width: string = '500px';
	export let isForm: boolean = false;

	const dispatch = createEventDispatcher();

	const onClickOutside = () => {
		dispatch('clickOutside');
	};
</script>

<Overlay />
<!-- this={isForm ? 'form' : 'div'} -->
<div
	class="modal"
	on:submit|preventDefault
	style:max-width={width}
	use:clickOutside={onClickOutside}
	transition:fly={{ y: -30, duration: 450 }}
>
	<slot name="header">
		<header>
			<h5>{title}</h5>

			<Action icon="heroicons-solid:x" />
		</header>
	</slot>

	<div class="modal-body">
		<slot />
	</div>

	<slot name="footer" />
</div>

<style lang="scss">
	.modal {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 300px;
		width: 100%;
		background-color: var(--color-surface);
	}

	.modal-body {
		background-color: var(--color-gray-100);
	}
</style>
