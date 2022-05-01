<script lang="ts">
	import LocalIcon from '$lib/components/global/LocalIcon.svelte';
	export let number: 1 | 2 | 3 | 4;
	export let title: string;
	export let content: string;

	let isHovering: boolean = false;

	function handleMouseEnter() {
		isHovering = true;
	}

	function handleMouseLeave() {
		isHovering = false;
	}
</script>

<div class="block" on:mouseleave={handleMouseLeave} on:mouseenter={handleMouseEnter}>
	<div class="overline"><div class="overline__inner-line" /></div>
	<LocalIcon icon="number-{number}" width="60px" fill={isHovering ? 'white' : 'transparent'} />

	<div class="content">
		<h4>{title}</h4>
		<p>{content}</p>
	</div>
</div>

<style lang="scss">
	.block {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		padding: var(--space-md) 0;

		&:hover .overline__inner-line {
			width: 100%;
		}

		span {
			font-size: 100px;
			color: var(--color-off-white);
			font-weight: var(--fw-extra-bold);
		}

		.content {
			display: flex;
			flex-direction: column;
			gap: var(--space-xs);
		}
	}

	.overline {
		width: 100%;
		height: 1px;
		background-color: rgba(190, 190, 190, 0.33);

		&__inner-line {
			height: 100%;
			width: 0%;
			background-color: var(--color-white);
			transition: width 0.25s ease-out;
		}
	}
</style>
