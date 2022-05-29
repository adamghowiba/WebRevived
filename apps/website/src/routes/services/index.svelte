<script lang="ts">
	import ContactSection from '$lib/components/global/ContactSection.svelte';
	import HeaderImage from '$lib/components/global/HeaderImage.svelte';
	import PageHeader from '$lib/components/global/PageHeader.svelte';
	import ServiceProcess from '$lib/components/services/process/ServiceProcess.svelte';
	import ServicesSection from '$lib/components/services/ServicesSection.svelte';
</script>

<PageHeader
	pageName="Services"
	title="Boundries are so 20th century, that's why we don't use them."
	subtitle="We transform ideas into digital outcomes"
/>

<HeaderImage imgSrc="/images/services/tile_frames.png" />

<article class="section--md container description">
	<h4>What We Do</h4>
	<p class="body--xl">
		AB Digital is a digital brand agency that lives where design, technology,and experience collide.
		We are obsessed with creativity — challenging what is, while defining what comes next.
	</p>
</article>

<ServicesSection />

<ServiceProcess />

<ContactSection />


<style lang="scss">
	.description {
		display: grid;
		grid-template-columns: 1fr 1.5fr;
		align-items: center;
		gap: var(--space-xl);

		p {
			color: var(--color-off-white);
		}
	}

	/* TABLET */
	@media screen and (max-width: 768px) {
		.description {
			display: flex;
			flex-direction: column;
			text-align: center;
		}
	}
</style>
