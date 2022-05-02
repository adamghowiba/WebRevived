<script lang="ts">
	export let name = 'text';
	export let placeholder = 'A message to us';
	export let value: string;

	$: console.log(value);
</script>

<div class="textarea-wrap">
	<div
		class="textarea"
		{name}
		{placeholder}
		cols="30"
		rows="7"
		contenteditable
		role="textbox"
		bind:innerHTML={value}
	>
		<!-- {#if !value}
			<div class="placeholder">{placeholder}</div>
		{/if} -->
	</div>
	<div class="underline" />
</div>

<style lang="scss">
	.textarea {
		min-height: 150px;
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
		resize: none;

		&:focus + .underline {
			background-color: var(--color-primary);
			height: 6px;
		}
		&:empty::before {
			content: 'Send us a message';
			color: gray;
		}
	}
	.textarea-wrap {
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
