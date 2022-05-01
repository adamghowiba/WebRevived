<script lang="ts">
	import { browser } from '$app/env';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	export let imgSrc: string;

	function expandImage(node: HTMLElement) {
		gsap.from(node, {
			borderRadius: '50px',
			width: '80%',
			duration: 0.6,
			scrollTrigger: {
				trigger: node,
				start: 'top center',
				toggleActions: 'play none play reverse'
			}
		});
	}

	onMount(async () => {
		const { ScrollTrigger } = await import('gsap/ScrollTrigger');
		gsap.registerPlugin(ScrollTrigger);
	});
</script>

<img use:expandImage class="header-image" src={imgSrc} alt="Multiple website UI's" />

<style lang="scss">
	.header-image {
		display: block;
		width: 100%;
		margin: 0 auto;
		height: 90vh;
		object-fit: cover;
	}
</style>
