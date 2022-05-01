<script lang="ts">
	import Icon from '@iconify/svelte';

	interface IconStyle {
		size?: number;
		color?: string;
		rotation?: string | number;
	}

	type ButtonStyle = 'border' | 'none' | 'link';
	type ButtonColor = 'black' | 'white';
	type ButtonSize = 'small' | 'base' | 'large';
	type TextStyle = 'uppercase' | 'none' | 'capitalize';

	export let style: ButtonStyle = 'border';
	export let color: ButtonColor = 'white';
	export let size: ButtonSize = 'base';
	export let href: string = '';
	export let textStyle: TextStyle = 'uppercase';
	export let icon: string | undefined = undefined;
	export let iconStyle: IconStyle = {};

	const DEFAULT_ICON: IconStyle = {
		color: 'var(--color-white)',
		size: 20
	};

	const ICON_STYLE = {
		icon,
		color: iconStyle?.color || DEFAULT_ICON.color,
		width: iconStyle?.size || DEFAULT_ICON.size,
		height: iconStyle.size || DEFAULT_ICON.size,
		rotate: iconStyle?.rotation || DEFAULT_ICON.rotation
	};

	let styleString = `style--${style} size--${size} color--${color}`;
</script>

<div class="button-wrap" style:text-transform={textStyle}>
	{#if href}
		<a {href} class={styleString}>
			<span><slot /></span>
			{#if icon}
				<Icon {...ICON_STYLE} />
			{/if}
		</a>
	{:else}
		<button class={styleString}>
			<span><slot /></span>
			{#if icon}
				<Icon {...ICON_STYLE} />
			{/if}
		</button>
	{/if}
</div>

<style lang="scss">
	.button-wrap {
		display: inline-flex;
		height: auto;
		width: auto;
	}
	button {
		appearance: none;
		background-color: transparent;
		outline: none;
		border: none;
	}

	button,
	a {
		color: var(--color-white);
		font-size: var(--text-button);
		font-weight: var(--fw-bold);
		text-transform: inherit;
		display: flex;
		align-items: center;
		gap: var(--space-2xs);

		span {
			color: var(--color-white);
		}
	}

	/* Button Size */
	.size {
		&--base {
			padding: calc(var(--space-2xs) + 3px) var(--space-md);
		}
	}

	/* Button Color */
	.color {
		&--white {
			color: var(--color-white);
			border-color: var(--color-white);
		}
		&--black {
			color: var(--color-black);
			border-color: var(--color-black);
		}
	}

	/* Button Style */
	.style {
		&--border.color--white {
			border: 5px solid var(--color-white);
		}
		&--border.color--black {
			border: 5px solid var(--color-black);
		}

		&--link span {
			border-bottom: 2px solid var(--color-white);
		}

		&--none,
		&--link {
			padding-left: 0px;
			padding-right: 0px;
		}
	}
</style>
