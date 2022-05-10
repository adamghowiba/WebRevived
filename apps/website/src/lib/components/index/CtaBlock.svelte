<script lang="ts">
	import type { IconType } from '$lib/constants/icons';
	import Button from '../buttons/Button.svelte';
	import InfoBlock from '../content/InfoBlock.svelte';
	import LocalIcon from '../global/LocalIcon.svelte';

	type ContentLocation = 'left' | 'right';

	interface InfoBlock {
		headings: string[];
		desc: string;
		button: { text: string; href: string };
	}
	export let icon: IconType | undefined = undefined;
	export let contentLocation: ContentLocation = 'left';
	export let content: InfoBlock;
</script>

<section class="container section content--{contentLocation}">
	<InfoBlock {...content} />
	{#if icon}
		<div class="icon">
			<LocalIcon {icon} width="100%" height="100%" fill="var(--color-primary)" />
		</div>
	{/if}
</section>

<style lang="scss">
	section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--space-lg);
		position: relative;

		/* Content Location */
		&.content--right {
			flex-direction: row-reverse;
		}
	}

	.icon {
		width: 100%;
		max-width: 370px;
	}

	/* Laptop */
	@media screen and (max-width: 1024px) {
		section {
			text-align: center;
			justify-content: center;
			flex-direction: column-reverse;

			&.content--right {
				flex-direction: column-reverse;
			}
		}
		.icon {
			max-width: 330px;
			margin-bottom: var(--space-lg);
		}
	}

	@media screen and (max-width: 597px) {
		.icon {
			max-width: 230px;
		}
	}
</style>
