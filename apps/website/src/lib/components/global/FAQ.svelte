<script lang="ts">
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

	function handleQuestionClick(event: MouseEvent) {
		const currentTarget = event.currentTarget as HTMLElement;
		const target = event.target as HTMLElement;
		if (target?.tagName === 'P') return;

		const answerElement = currentTarget.querySelector('p');

		answerElement?.classList.toggle('visible');
	}
</script>

<section class="section">
	<div class="container">
		<h1>Frequently Asked Questions</h1>

		<div class="questions-wrap">
			{#each QUESTIONS as { question, answer }}
				<div class="question" on:click={handleQuestionClick}>
					<div class="question__head">
						<h4>{question}</h4>
					</div>
					<p>{answer}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	section {
		background-color: var(--color-primary);
		color: var(--color-black);
	}

	.questions-wrap {
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
	}

	.question {
		padding-bottom: var(--space-xs);
		border-bottom: 4px solid var(--color-black);

		// &__head {
		// }

		p {
			position: relative;
			z-index: 10;
			display: none;
            padding-top: var(--space-xs);
		}

		:global(p.visible) {
			display: block !important;
		}
	}

	h1 {
		text-align: center;
		pointer-events: none;
		margin-bottom: var(--space-lg);
	}

	p {
		color: #615e5e;
	}
</style>
