<script lang="ts">
	export let options = [
		'Web Design',
		'Frontend',
		'Backend',
		'eCommerece Design',
		'Content Strategy',
		'App Design & Development',
		'Copywriting',
		'UI/UX Design'
	];
	export let selected: string[] = [];

	function handleCheckboxSelect(event: MouseEvent) {
		const target = event.target as HTMLElement;
		const checkbox = target.querySelector('input') as HTMLInputElement;
		if (!checkbox) return;

		let nameIndex = selected.indexOf(checkbox.name);
		checkbox.checked = !checkbox.checked;
		if (nameIndex > -1) {
			selected.splice(nameIndex);
			selected = selected;
			return;
		}

		selected = [...selected, checkbox.name];
	}
</script>

<div class="section--sm container">
	{#each options as option}
		<button class="checkbox" on:click={handleCheckboxSelect}>
			<input type="checkbox" name={option} />
			<label for={option}>{option}</label>
		</button>
	{/each}
</div>

<style lang="scss">
	.container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-2xs);
	}

	.checkbox {
		display: flex;
		align-items: center;
		gap: var(--space-2xs);
		font-weight: var(--fw-medium);
		font-size: var(--text-button);
		padding: var(--space-sm);
		background-color: var(--color-white);
		color: var(--color-black);
		width: 100%;
		min-height: 90px;
		appearance: none;
		border: none;
		outline: none;
		transition: transform 0.25s ease-out;

		&:hover {
			cursor: pointer;
			transform: translateY(-1px);
		}

		input[type='checkbox'] {
			// appearance: none;
			width: var(--space-xs);
			height: var(--space-xs);
			pointer-events: none;
		}

		label {
			pointer-events: none;
			text-align: left;
		}
	}

	/* Mobile Middle */
	@media only screen and (max-width: 597px) {
		.container {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
