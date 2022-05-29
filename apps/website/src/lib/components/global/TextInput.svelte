<script lang="ts">
	import Button from '../buttons/Button.svelte';

	export let type: 'email' | 'text' | 'tel';
	export let name: string;
	export let value: string;
	export let placeholder: string;
	export let width: string = '100%';
	export let maxWidth: string = 'unset';
	export let hoverEffect: boolean = true;
	export let required: boolean = false;
</script>

<div class="input-wrap" class:hoverEffect style:width style:max-width={maxWidth}>
	{#if type == 'text'}
		<input type="text" {name} {placeholder} bind:value {required} />
	{/if}

	{#if type == 'email'}
		<input type="email" {name} {placeholder} bind:value {required} />
	{/if}

	{#if type == 'tel'}
		<input type="tel" {name} {placeholder} bind:value {required} />
	{/if}
	<div class="underline" />
</div>

<style lang="scss">
	input {
		appearance: none;
		background-color: transparent;
		border: none;
		outline: none;
		padding: 12px 8px;
		font-size: var(--text-h5);
		color: var(--color-white);
		width: 100%;
		font-family: inherit;
		font-weight: var(--fw-semi-bold);
	
	}
	.hoverEffect input:focus + .underline {
		background-color: var(--color-primary);
		height: 6px;
	}

	.input-wrap {
		position: relative;

		.underline {
			width: 100%;
			height: 3px;
			background-color: white;
			transition: height 0.15s ease-in;
			position: absolute;
		}

		&.hoverEffect:hover .underline {
			height: 6px;
		}
	}

	@media screen and (max-width: 375px) {
			input {
				font-size: 14px;
				min-height: 47px;
			}
	}
</style>
