<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	type AnimationDirection = 'bottom' | 'top' | 'left' | 'right';

	interface WordAnimation {
		word: string;
		in: AnimationDirection[];
		out: AnimationDirection[];
		split: number;
		inDelay: number;
		outDelay: number;
	}

	const WORDS: WordAnimation[] = [
		{
			word: 'Scaleable',
			in: ['bottom', 'top'],
			out: ['top', 'top'],
			split: 5,
			inDelay: 0.7,
			outDelay: 0
		},
		{
			word: 'Sustainable',
			in: ['bottom', 'right'],
			out: ['left', 'top'],
			split: 3,
			inDelay: 0.5,
			outDelay: 0.8
		},
		{
			word: 'Measurable',
			in: ['left', 'bottom'],
			out: ['top', 'top'],
			split: 3,
			inDelay: 0.9,
			outDelay: 0.7
		},
		{
			word: 'Predictable',
			in: ['left', 'bottom'],
			out: ['bottom', 'right'],
			split: 5,
			inDelay: 0.4,
			outDelay: 0.8
		}
	];

	function generateTransformObject(direction: AnimationDirection) {
		if (direction === 'top') {
			return { yPercent: -101 };
		}

		if (direction === 'bottom') {
			return { yPercent: 101 };
		}

		if (direction === 'left') {
			return { xPercent: -101 };
		}

		if (direction === 'right') {
			return { xPercent: 101 };
		}
	}

	function playInAnimation(wordIndex: number) {
		let word = WORDS[wordIndex];
		let firstSplitAni = WORDS[wordIndex].in[0];
		let secondSplitAni = WORDS[wordIndex].in[1];

		const firstSplits: HTMLElement[] = gsap.utils.toArray('.word__split--1');
		const secondSplits: HTMLElement[] = gsap.utils.toArray('.word__split--2');
		const wordsWrapper: HTMLElement[] = gsap.utils.toArray('.word');

		const timeline = gsap.timeline({ defaults: { duration: 0.56 } });

		gsap.set(wordsWrapper[wordIndex], { opacity: 1 });

		timeline.from(firstSplits[wordIndex], {
			...generateTransformObject(firstSplitAni)
		});

		timeline.from(
			secondSplits[wordIndex],
			{
				...generateTransformObject(secondSplitAni),
				delay: word.inDelay
			},
			'<'
		);
		return timeline;
	}

	function playOutAnimation(wordIndex: number) {
		let word = WORDS[wordIndex];
		let firstWordOutSplit = WORDS[wordIndex].out[0];
		let secondWordOutSplit = WORDS[wordIndex].out[1];

		const firstSplit: HTMLElement[] = gsap.utils.toArray('.word__split--1');
		const secondSplit: HTMLElement[] = gsap.utils.toArray('.word__split--2');
		const timeline = gsap.timeline({ defaults: { duration: 0.56 } });

		timeline.to(firstSplit[wordIndex], {
			...generateTransformObject(firstWordOutSplit),
			duration: 0.5
		});

		timeline.to(
			secondSplit[wordIndex],
			{
				...generateTransformObject(secondWordOutSplit),
				delay: word.outDelay,
				duration: 0.5
			},
			'<'
		);

		return timeline;
	}

	onMount(() => {
		let timeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });

		WORDS.forEach((word, i) => {
			timeline.add(playInAnimation(i));
			timeline.add(playOutAnimation(i), '>+=2');
		});

		return () => {
			timeline.kill();
		};
	});
</script>

<span class="word-wrapper">
	<div class="fake-word">Predictable</div>
	{#each WORDS as word}
		<h1 class="word title">
			<span class="word__split--1">{word.word.substring(0, word.split)}</span>
			<span class="word__split--2">{word.word.substring(word.split, word.word.length)}</span>
		</h1>
	{/each}
</span>

<style lang="scss">
	span {
		display: inline;
		color: inherit;
        text-decoration: underline;
	}
	.fake-word {
		opacity: 0;
	}

	h1 {
		overflow: hidden;
	}
	.word-wrapper {
		display: inline-block;
		height: min-content;
		position: relative;
	}
	.word {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		opacity: 0;
		width: max-content;

		span {
			display: block;
		}
	}
</style>
