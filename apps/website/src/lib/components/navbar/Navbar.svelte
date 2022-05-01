<script lang="ts">
	import Button from '../buttons/Button.svelte';
	import Hamburger from './Hamburger.svelte';
</script>

<nav class="nav container">
	<img class="nav__logo" src="/images/logo.png" alt="WebRevived logo" />

	<div class="links">
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/services">Services</a>
		<a href="/contact">Contact</a>
		<Button>Talk To Us</Button>
	</div>

	<div class="hamburger">
		<Hamburger />
	</div>
</nav>

<style lang="scss">
	.nav {
		padding: var(--space-sm);
		display: flex;
		justify-content: space-between;
		align-items: center;
		&__logo {
			width: 100%;
			max-width: 40px;
		}
	}
	.links {
		display: flex;
		align-items: center;
		gap: var(--space-3xl);
	}
	.hamburger {
		display: none;
	}

	/* LAPTOP */
	@media screen and (max-width: 1024px) {
		.links {
			gap: var(--space-lg);
		}
	}

	/* TABLET */
	@media screen and (max-width: 768px) {
		.links {
			display: none;
		}
		.hamburger {
			display: flex;
		}
	}
</style>
