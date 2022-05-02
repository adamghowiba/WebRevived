<script lang="ts">
	import Icon from '@iconify/svelte';
	import { slide, fade } from 'svelte/transition';
	import PlusButton from '../buttons/PlusButton.svelte';

	let openQuestions: number[] = [];

	const QUESTIONS = [
		{
			question: "What's included with WebRevived services",
			answer: `We execute our proprietary PPC strategies on key search engines such as Google and Bing. Our main deliverables include keyword research, ad copy, campaign management, reporting, and much more. NoGood's PPC strategies are based on extensive learnings from Fortune 500 companies and VC-backed startups, and our squads tailor the unique strategies to the unique needs of each partner.`
		},
		{
			question: 'How do you make a difference?',
			answer: `We execute our proprietary PPC strategies on key search engines such as Google and Bing. Our main deliverables include keyword research, ad copy, campaign management, reporting, and much more. NoGood's PPC strategies are based on extensive learnings from Fortune 500 companies and VC-backed startups, and our squads tailor the unique strategies to the unique needs of each partner.`
		},
		{
			question: 'Why should we trust you?',
			answer: `We execute our proprietary PPC strategies on key search engines such as Google and Bing. Our main deliverables include keyword research, ad copy, campaign management, reporting, and much more. NoGood's PPC strategies are based on extensive learnings from Fortune 500 companies and VC-backed startups, and our squads tailor the unique strategies to the unique needs of each partner.`
		},
		{
			question: 'What about the other 500 digital agencies?',
			answer: `We execute our proprietary PPC strategies on key search engines such as Google and Bing. Our main deliverables include keyword research, ad copy, campaign management, reporting, and much more. NoGood's PPC strategies are based on extensive learnings from Fortune 500 companies and VC-backed startups, and our squads tailor the unique strategies to the unique needs of each partner.`
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
		color: #615e5e;
	}
</style>
