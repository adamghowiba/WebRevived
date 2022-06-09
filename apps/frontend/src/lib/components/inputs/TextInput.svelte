<script context="module" lang="ts">
	type ValidationState = 'error' | 'success';
	type PartialIconStyle = Partial<IconStyle>;

	interface IconStyle {
		icon: string;
		color: string;
		size: number;
		location: 'left' | 'right';
		rotate: number;
		isClickable: boolean;
	}

	const DEFAULT_ICON_STYLE: IconStyle = {
		icon: 'mi:user',
		color: 'var(--color-gray-500)',
		size: 16,
		location: 'left',
		rotate: 0,
		isClickable: false
	};
</script>

<script lang="ts">
	import Icon from '@iconify/svelte';
	import { createEventDispatcher } from 'svelte';

	export let value: string;
	export let label: string = undefined;
	export let placeholder: string = undefined;
	export let name: string = undefined;
	export let state: ValidationState = undefined;

	export let isFocused: boolean = false;
	export let isReadonly: boolean = false;
	export let isDisabled: boolean = false;
	export let isRequired: boolean = false;
	export let icon: PartialIconStyle | string = undefined;

	let inputElement: HTMLInputElement;

	const dispatch = createEventDispatcher();

	const handleIconClick = () => {
		inputElement.focus();
		dispatch('iconClick');
	};

	const onFocusEvent = () => {
		isFocused = true;
	};

	const onBlurEvent = (event: Event) => {
		isFocused = false;
	};

	const getIconStyles = (icon: PartialIconStyle | string): IconStyle => {
        if (!icon) return;

		if (typeof icon === 'string') {
			return { ...DEFAULT_ICON_STYLE, icon };
		}

		return { ...DEFAULT_ICON_STYLE, ...icon };
	};

	$: iconStyle = getIconStyles(icon);
</script>

<div class="wrap">
	{#if label}
		<label for={name}>{label}</label>
	{/if}

	<div
		class="input-wrap state--{state} icon-location--{iconStyle?.location}"
		class:isFocused
		class:readonly={isDisabled || isReadonly}
	>
		{#if icon}
			<div
				class="input-wrap__icon"
				class:is-clickable={iconStyle.isClickable}
				on:click={handleIconClick}
			>
				<Icon
					icon={iconStyle.icon}
					color={iconStyle.color}
					width={iconStyle.size}
					height={iconStyle.size}
					rotate={iconStyle.rotate}
				/>
			</div>
		{/if}

		<input
			bind:this={inputElement}
			type="text"
			{name}
			{placeholder}
			disabled={isDisabled}
			required={isRequired}
			readonly={isReadonly}
			bind:value
			on:focus={onFocusEvent}
			on:blur={onBlurEvent}
		/>
	</div>
</div>

<style lang="scss">
	.wrap {
		display: flex;
		flex-direction: column;
		gap: calc(var(--space-2xs) + 3px);
	}

	.input-wrap {
		position: relative;
		display: flex;
		align-items: center;
		border: 1px solid var(--color-gray-300);
		border-radius: var(--br-sm);
		background-color: var(--color-background);

		&::after {
			content: '';
			border: 4px solid transparent;
			position: absolute;
			display: block;
			top: -4px;
			bottom: -4px;
			right: -4px;
			left: -4px;
			pointer-events: none;
			border-radius: var(--br-lg);
			transition: border 0.15s ease-in-out;
		}

		&.readonly {
			background-color: var(--color-gray-100);
		}

		&__icon {
			position: absolute;
			z-index: 10;
			pointer-events: none;
		}
		&__icon.is-clickable {
			pointer-events: unset;
		}

		/* FOCUS STYLES */
		&.isFocused::after {
			border: 4px solid var(--color-primary-muted);
		}

		&.isFocused {
			border: 1px solid var(--color-primary);
		}

		/* VALIDATION STATE */
		&.state--error {
			border: 1px solid var(--color-error);
		}
		&.state--error.isFocused::after {
			border: 4px solid var(--color-error-muted);
		}

		&.state--success {
			border: 1px solid var(--color-success);
		}
		&.state--success.isFocused::after {
			border: 4px solid var(--color-success-muted);
		}

		/* ICON STYLES */
		&.icon-location--right {
			flex-direction: row-reverse;
		}
		&.icon-location--right &__icon {
			padding-right: 12px;
		}
		&.icon-location--right input {
			padding-right: var(--space-lg);
		}

		&.icon-location--left &__icon {
			padding-left: 12px;
		}
		&.icon-location--left input {
			padding-left: var(--space-lg);
		}
	}

	input {
		appearance: none;
		position: relative;
		font-family: inherit;
		border: none;
		padding: 7px 12px;
		border-radius: inherit;
		outline: none;
		font-size: var(--text-body);
		width: 100%;

		&::placeholder {
			color: var(--color-gray-500);
		}

		&:disabled {
			background-color: var(--color-gray-100);
			color: var(--color-gray-600);
		}

		&:read-only:not(:disabled) {
			background-color: var(--color-gray-100);
			color: var(--color-gray-700);
		}
	}

	label {
		appearance: none;
		position: relative;
		left: 2px;
		font-size: var(--text-body);
		font-weight: var(--fw-medium);
	}
</style>
