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
	export let width: string = 'max-content';
	export let maxWidth: string = 'none';

	export let hoverCircle: boolean = false;

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

	const handleMouseEnter = (event: MouseEvent) => {
		if (!hoverCircle) return;
		const target = event.target as HTMLElement;
		const circle = target.querySelector<HTMLElement>('.circle');
		if (!circle) return;

		circle.style.left = `${event.offsetX}px`;
		circle.style.top = `${event.offsetY}px`;
	};

	const handleMouseLeave = (event: MouseEvent) => {
		if (!hoverCircle) return;
		const target = event.target as HTMLElement;
		const circle = target.querySelector<HTMLElement>('.circle');
		if (!circle) return;
		circle.style.left = `${event.offsetX}px`;

		const height = target.clientHeight;

		if (circle.offsetTop < height / 2) {
			circle.style.top = `-${20 + circle.offsetTop}px`;
		} else {
			circle.style.top = `${20 + circle.offsetTop}px`;
		}
	};

	let styleString = `style--${style} size--${size} color--${color}`;
</script>

<div
	class="button-wrap"
	style:text-transform={textStyle}
	style="--width: {width}; --maxWidth: {maxWidth};"
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
>
	{#if hoverCircle}
		<div class="circle color--{color}" />
	{/if}
	{#if href}
		<a {href} class={styleString} on:click>
			<span><slot /></span>
			{#if icon}
				<Icon {...ICON_STYLE} />
			{/if}
		</a>
	{:else}
		<button class={styleString} on:click>
			<span><slot /></span>
			{#if icon}
				<Icon {...ICON_STYLE} />
			{/if}
		</button>
	{/if}
</div>

<style lang="scss">
	.circle {
		position: absolute;
		border-radius: 50%;
		background-color: white;
		left: -20px;
		width: 25px;
		height: 25px;
		transition: transform 0.5s ease-in-out;

		&.color--white {
			background-color: white;
		}

		&.color--black {
			background-color: var(--color-black);
		}
	}
	.button-wrap {
		position: relative;
		display: inline-flex;
		height: auto;
		width: var(--width, max-content);
		overflow: hidden;

		&:hover .circle {
			transform: scale(14.5);
		}
	}
	button {
		appearance: none;
		background-color: transparent;
		outline: none;
		border: none;
	}

	button,
	a {
		position: relative;
		color: var(--color-white);
		font-size: var(--text-button);
		font-weight: var(--fw-bold);
		text-transform: inherit;
		display: flex;
		align-items: center;
		gap: var(--space-2xs);
		justify-content: center;
		width: var(--width, auto);
		max-width: var(--maxWidth, none);
		font-family: inherit;

		&:hover {
			cursor: pointer;
		}

		span {
			color: white;
			mix-blend-mode: difference;
			line-height: normal;
			transition: color 0.2s ease-in;
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

			span {
				color: var(--color-black);
				mix-blend-mode: unset;
			}

			&:hover span {
				color: var(--color-white);
			}
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
