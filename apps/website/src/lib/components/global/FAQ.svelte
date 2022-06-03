<script lang="ts">
	import Icon from '@iconify/svelte';
	import { slide, fade } from 'svelte/transition';
	import PlusButton from '../buttons/PlusButton.svelte';

	let openQuestions: number[] = [];

	const QUESTIONS = [
		{
			question: 'What Services Do You Offer?',
			answer: `Web Revived is a Branding, Social Media, and Website design company. We help companies elevate their digital presence with these three primary services.`
		},
		{
			question: 'What Makes You Different?',
			answer: `We embrace the new and forget the old. With our young, high-energy, and diverse team, we can create the best of the best digital presence for all types of business. With our in-depth yet simple client process, you can worry about the day-to-day business work while we perfect your digital company.`
		},
		{
			question: 'Why Should I Trust Web Revived ?',
			answer: `Our digital marketing team has 12+ years of experience combined. We have worked with companies of all sizes, locations, and levels. We pride ourselves on being able to service businesses of all kinds.`
		},
		{
			question: 'What If I Am New To Marketing?',
			answer: `Web Revived specializes in helping companies start from the bottom. Whether you just have an idea or are looking for someone to pick up where you left off. With a large team and abundant resources, we can help you achieve all marketing needs regardless of where you're at in your business journey.`
		}
	];

	function handleQuestionClick(index: number) {
		if (openQuestions.includes(index)) {
			return (openQuestions = openQuestions.filter((questionIndex) => questionIndex !== index));
		}
		openQuestions = [...openQuestions, index];
	}
</script>

<section class="section">
	<div class="container">
		<h1>Frequently Asked Questions</h1>

		<div class="questions-wrap">
			{#each QUESTIONS as { question, answer }, i}
				{@const isOpen = openQuestions.includes(i)}
				<div class="question">
					<div class="question__head" on:click={() => handleQuestionClick(i)}>
						<h4>{question}</h4>
						<PlusButton open={isOpen} />
					</div>
					{#if isOpen}
						<p transition:slide={{ duration: 250 }}>
							<span transition:fade={{ duration: 150 }}>
								{answer}
							</span>
						</p>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	section {
		background-color: var(--color-primary);
		color: var(--color-black);
		margin-top: var(--space-section-base);
	}

	.questions-wrap {
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
	}

	.question {
		// padding-bottom: var(--space-xs);
		border-bottom: 4px solid var(--color-black);

		&__head {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-bottom: var(--space-xs);
			gap: var(--space-md);
		}

		&__head:hover {
			cursor: pointer;
		}

		p {
			position: relative;
			z-index: 10;
			padding-bottom: var(--space-xs);
			transition: opacity 2s ease-out;
		}
	}

	h1 {
		text-align: center;
		pointer-events: none;
		margin-bottom: var(--space-lg);
	}

	p,
	span {
		color: rgba(0, 0, 0, 0.61);
		font-weight: var(--fw-semi-bold);
		font-size: 18px;
		line-height: 1.8;
	}
</style>
