<script lang="ts" context="module">
	type ButtonColor = 'purple' | 'green' | 'orange' | 'red' | 'gray' | 'default';

	const BUTTON_COLOR: { [color in ButtonColor]: string } = {
		purple: 'var(--color-primary)',
		green: 'var(--color-success)',
		orange: 'var(--color-warn)',
		red: 'var(--color-error)',
		gray: 'var(--color-gray-600)',
		default: ''
	};

	const DEFAULT_ICON_STYLE: IconStyle = {
		icon: 'gg:add-r',
		size: 19,
		location: 'left',
		color: 'inherit',
		rotation: 0
	};
</script>

<script lang="ts">
	import type { IconStyle, PartialIcon } from '$lib/types/icon';
	import Icon from '@iconify/svelte';

	export let href: string = undefined;
	export let color: ButtonColor = 'purple';
	export let disabled: boolean = false;
	export let style: 'outline' | 'fill' | 'ghost' = 'fill';
	export let size: 'xs' | 'small' | 'base' | 'large' = 'base';
	export let width: 'base' | 'fill' = 'base';
	export let borderColor: 'button-color' | 'gray' = 'button-color';
	export let icon: PartialIcon | string = undefined;

	const getIconStyles = (icon: PartialIcon | string): IconStyle => {
		if (typeof icon === 'string') {
			return { ...DEFAULT_ICON_STYLE, icon };
		}

		return { ...DEFAULT_ICON_STYLE, ...icon };
	};

	$: iconStyles = getIconStyles(icon);
	const buttonClasses = `button color--${color} size--${size} style--${style} border-color--${borderColor} width--${width}`;
</script>

<div
	class="button-wrap location--{iconStyles.location}"
	class:disabled
	style="--button-color: {BUTTON_COLOR[color]}"
	on:click
>
	{#if href}
		<a class={buttonClasses} {href}>
			{#if icon}
				<Icon
					icon={iconStyles.icon}
					width={iconStyles.size}
					height={iconStyles.size}
					color={iconStyles.color}
					rotation={iconStyles.rotation}
				/>
			{/if}
			<slot />
		</a>
	{:else}
		<button class={buttonClasses} {disabled}>
			{#if icon}
				<Icon
					icon={iconStyles.icon}
					width={iconStyles.size}
					height={iconStyles.size}
					color={iconStyles.color}
					rotation={iconStyles.rotation}
				/>
			{/if}
			<slot />
		</button>
	{/if}
</div>

<style lang="scss">
	.button-wrap {
		width: auto;
	}

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-xs);
		font-size: var(--text-body);
		font-family: var(--font);
		font-weight: var(--fw-medium);
		line-height: normal;
		color: inherit;
		min-width: 130px;
		padding: var(--space-2xs) var(--space-xs);
		border-radius: var(--br-sm);
		transition: opacity 0.15s ease-out;

		&:hover {
			cursor: pointer;
		}

		&:disabled {
			opacity: 0.7;
		}

		/* COLORS */
		&.color--purple {
			background-color: var(--color-primary);
			color: white;
		}
		&.color--red {
			background-color: var(--color-error);
			color: white;
		}
		&.color--orange {
			background-color: var(--color-warn);
			color: white;
		}
		&.color--green {
			background-color: var(--color-success);
			color: white;
		}
		&.color--default {
			background: linear-gradient(var(--color-surface) 0,var(--color-background) 100%) no-repeat padding-box;
			border: 1px solid var(--color-gray-300);
			box-shadow: 0 -1px 0 0 rgba(208, 212, 223, 0.274) inset;
		}

		/* SIZES */
		&.size--small {
			min-width: 75px;
			gap: var(--space-2xs);
		}
		&.size--large {
			min-width: 120px;
			padding: calc(var(--space-xs) - 4px);
		}
		&.size--xs {
			min-width: 75px;
			padding: var(--space-3xs);
		}
		&.width--fill {
			width: 100%;
		}

		/* STYLE */
		&.style--outline {
			background-color: transparent;
			color: var(--button-color);
			border: 1px solid var(--button-color);
		}
		&.style--ghost {
			min-width: 75px;
			background-color: transparent;
			color: var(--button-color);
		}

		/* ICON LOCATION */
		&.location--right {
			flex-direction: row-reverse;
		}

		/* BORDER COLOR */
		&.border-color--gray {
			border-color: var(--color-gray-300);
			color: var(--color-gray-700);
		}

		&.disabled {
			opacity: 0.7;
		}
	}

	button {
		appearance: none;
		background-color: transparent;
		outline: none;
		border: none;
		padding: 0;
		margin: 0;
		min-height: auto;
	}
</style>
