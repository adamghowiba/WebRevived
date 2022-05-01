<script lang="ts">
	import Button from '../buttons/Button.svelte';
	import LocalIcon from '../global/LocalIcon.svelte';
</script>

<section class="section--sm container">
	<header>
		<h1 class="title">We Help Impactful Brands Build Scalable Copunding Growth.</h1>
		<p class="body--lg">
			Business marketing used to be about "fitting in" with everyone else. Today, it's about
			standing out. It's about being bold, showing and proving how you're different.
		</p>
		<Button
			style="none"
			icon="mdi:arrow-right-drop-circle-outline"
			iconStyle={{ rotation: '90deg' }}
		>
			Explore
		</Button>
	</header>
</section>

<div class="wheel">
	<div class="wheel__icon">
		<LocalIcon icon="wheel" />
	</div>
</div>

<style lang="scss">
	.wheel {
		// position: absolute;
		position: relative;
		bottom: 0;
		width: 100%;
		height: 130px;
		margin-top: var(--space-xl);

		&__icon {
			position: absolute;
			width: 100%;
			left: 0;
			bottom: 0;
		}
	}
	header {
		max-width: 75ch;
		display: flex;
		gap: var(--space-2xs);
		flex-direction: column;
	}
	p {
		line-height: var(--line-lg);
		margin-bottom: var(--space-md);
	}

	@media screen and (max-width: 425px) {
		.wheel {
			margin-top: -3rem;
		}
	}
</style>
