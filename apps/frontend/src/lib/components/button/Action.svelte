<script lang="ts" context="module">
	import type { IconStyle, PartialIcon } from '$lib/types/icon';
	import Icon from '@iconify/svelte';

	const DEFAULT_ICON_STYLE: IconStyle = {
		icon: 'gg:add-r',
		size: 19,
		location: 'left',
		color: 'var(--color-gray-800)',
		rotation: 0
	};
</script>

<script lang="ts">
	export let icon: PartialIcon | string;
	export let hoverEffect: 'fill' = undefined;
	export let disabled: boolean = false;

	const getIconStyles = (icon: PartialIcon | string): IconStyle => {
		if (typeof icon === 'string') {
			return { ...DEFAULT_ICON_STYLE, icon };
		}

		return { ...DEFAULT_ICON_STYLE, ...icon };
	};

	$: iconStyles = getIconStyles(icon);
</script>

<button class="action hover--{hoverEffect}" {disabled} on:click>
	<slot>
		<Icon
			icon={iconStyles.icon}
			width={iconStyles.size}
			height={iconStyles.size}
			color={iconStyles.color}
			rotate={iconStyles.rotation}
		/>
	</slot>
</button>

<style lang="scss">
	button {
		appearance: none;
		outline: none;
		border: none;
		background-color: transparent;

		&:disabled {
			opacity: 0.6;
		}
	}

	.action {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 30px;
		min-height: 30px;
		border-radius: 50%;
		transition: var(--transition-theme-background);

		&:hover {
			cursor: pointer;
		}

		&.hover--fill:hover {
			background-color: var(--color-gray-100);
		}
	}
</style>
