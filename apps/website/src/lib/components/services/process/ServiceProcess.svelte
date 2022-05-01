<script lang="ts">
	import ProcessBlock from './ProcessBlock.svelte';
</script>

<section class="section container">
	<h2>How we'll work together</h2>

	<div class="blocks">
		<ProcessBlock
			title="Design-focused, first and foremost."
			number={1}
			content="As a team, we're design-focused across every touchpoint or interaction. Everything we do and dream up has a solid design impact. We get up and go in the morning, supercharged to make a difference with design as a top-of-mind solution."
		/>
		<ProcessBlock
			title="Design-focused, first and foremost."
			number={2}
			content="As a team, we're design-focused across every touchpoint or interaction. Everything we do and dream up has a solid design impact. We get up and go in the morning, supercharged to make a difference with design as a top-of-mind solution."
		/>
		<ProcessBlock
			title="Design-focused, first and foremost."
			number={3}
			content="As a team, we're design-focused across every touchpoint or interaction. Everything we do and dream up has a solid design impact. We get up and go in the morning, supercharged to make a difference with design as a top-of-mind solution."
		/>
		<ProcessBlock
			title="Design-focused, first and foremost."
			number={4}
			content="As a team, we're design-focused across every touchpoint or interaction. Everything we do and dream up has a solid design impact. We get up and go in the morning, supercharged to make a difference with design as a top-of-mind solution."
		/>
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
	}
	.blocks {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: var(--space-xl);
	}
</style>
