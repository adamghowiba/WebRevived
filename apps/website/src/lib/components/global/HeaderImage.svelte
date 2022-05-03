<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from '$lib/gsap';

	export let imgSrc: string;
	let imageElement: HTMLElement;

	function expandImage(node: HTMLElement) {
		let tween = gsap.from(node, {
			borderRadius: '50px',
			width: '80%',
			// ease: 'linear.easeOut',
			duration: 0.35,
			scrollTrigger: {
				trigger: node,
				start: 'top center',
				toggleActions: 'play none play reverse'
			}
		});

		return () => {
			tween.kill();
		};
	}

	onMount(async () => {
		let destory = expandImage(imageElement);

		return () => destory();
	});
</script>

<img class="header-image" src={imgSrc} alt="Multiple website UI's" bind:this={imageElement} />

<style lang="scss">
	.header-image {
		display: block;
		width: 100%;
		margin: 0 auto;
		height: 90vh;
		object-fit: cover;
	}
</style>
