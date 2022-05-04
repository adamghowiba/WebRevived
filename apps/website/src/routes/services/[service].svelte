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

	export let serviceData: Service;
</script>

<PageHeader
	pageName={serviceData.name}
	title={serviceData.header.title}
	subtitle={serviceData.header.subtitle}
/>

<img src={serviceData.header.imgSrc} alt="Webdesign laptop" />

<div class="container section">
	<p class="description body--xl">
		{serviceData.description}
	</p>
</div>

<!-- <ServiceImages images={serviceData.images}/> -->

<ArticleContent title="Approach">
	<p>
		This approach helps our clients in standing out in their respective industries. Our web
		developers are well versed in providing exciting customer experience and uniqueness for
		e-commerce websites. For Wordpress-related websites, our developers create websites that engages
		users or drives sales.
	</p>
</ArticleContent>

<Capabilities title="Capabilities" listItems={serviceData.capabilities.listItems}>
	<p>
		We bring vision to life by providing frictionless services of branding. We are not just
		identifying your brand, In fact we create seamless interaction between peoples & your
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
