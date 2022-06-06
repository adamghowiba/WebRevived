<script context="module" lang="ts">
	import { SERVICES } from '$lib/constants/services';
	import type { Service } from '$lib/types/service';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ params }) => {
		const serviceId = params.service;
		const serviceData = SERVICES.find((service) => service.id === serviceId);

		if (!serviceData) return { status: 400, error: 'Service not found' };

		return {
			props: {
				serviceData
			}
		};
	};
</script>

<script lang="ts">
	import ArticleContent from '$lib/components/global/ArticleContent.svelte';
	import PageHeader from '$lib/components/global/PageHeader.svelte';
	import Capabilities from '$lib/components/services/Capabilities.svelte';
	import ServiceImages from '../../lib/components/services/ServiceImages.svelte';
	import FloatingText from '$lib/components/global/FloatingText.svelte';
	import { ScrollTrigger } from '$lib/gsap';

	export let serviceData: Service;
	let headerImageLoaded: boolean = false;

	const handleLoad = (event: Event) => {
		headerImageLoaded = true;
		ScrollTrigger.refresh();
		console.log('Header image loaded');
	};
</script>

<PageHeader
	pageName={serviceData.name}
	title={serviceData.header.title}
	subtitle={serviceData.header.subtitle}
/>

<!-- <img src={serviceData.header.imgSrc} alt="Webdesign laptop" on:load={handleLoad} /> -->

<FloatingText>
	{serviceData.description}
</FloatingText>

<!-- <ServiceImages images={serviceData.images} /> -->

<ArticleContent title="Approach">
	<p>
		{serviceData.approach}
	</p>
</ArticleContent>

<Capabilities title="Capabilities" listItems={serviceData.capabilities.listItems}>
	<p>
		{serviceData.capabilities.description}
	</p>
</Capabilities>

<style lang="scss">
	img {
		width: 100%;
		object-fit: cover;
		display: block;
		margin: 0 auto;
		margin-bottom: var(--space-section-base);
	}
	.description {
		color: var(--color-white);
	}
</style>
