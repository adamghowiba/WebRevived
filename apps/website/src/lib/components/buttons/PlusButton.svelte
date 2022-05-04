<script lang="ts">
	export let color: string = 'black';
	export let open = false;
</script>

<div class="button" class:open style="--color: {color}" />

<style lang="scss">
	.button {
		position: relative;
		min-width: 22px;
		min-height: 22px;
		max-width: 22px;
		max-height: 22px;

		&:before,
		&:after {
			content: '';
			position: absolute;
			background-color: var(--color);
			transition: transform 0.25s ease-out;
		}

		/* Vertical line */
		&:before {
			top: 0;
			left: 50%;
			width: 4px;
			height: 100%;
			margin-left: -2px;
		}

		/* horizontal line */
		&:after {
			top: 50%;
			left: 0;
			width: 100%;
			height: 4px;
			margin-top: -2px;
		}

		&.open {
			cursor: pointer;

			&:before {
				transform: rotate(90deg);
			}
			&:after {
				transform: rotate(180deg);
			}
		}
	}
</style>
