<script lang="ts">
	export let type: 'email' | 'text' | 'tel';
	export let name: string;
	export let value: string;
	export let placeholder: string;
</script>

<div class="input-wrap">
	<input type="text" {name} {placeholder} bind:value />
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

		&:focus + .underline {
			background-color: var(--color-primary);
			height: 6px;
		}
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

		&:hover .underline {
			height: 6px;
		}
	}
</style>
