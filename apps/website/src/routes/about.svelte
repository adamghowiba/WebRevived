<script lang="ts">
	import ShineAreas from '$lib/components/about/ShineAreas.svelte';
	import SlideInText from '$lib/components/about/SlideInText.svelte';
	import ArticleContent from '$lib/components/global/ArticleContent.svelte';
	import ContactSection from '$lib/components/global/ContactSection.svelte';
	import Faq from '$lib/components/global/FAQ.svelte';
	import HeaderImage from '$lib/components/global/HeaderImage.svelte';
	import PageHeader from '$lib/components/global/PageHeader.svelte';
import { IMAGE_URL } from '$lib/constants/config';
</script>

<PageHeader
	pageName="About"
	title="We're just like a digital agency but without all the bull$#it"
	subtitle="We are a team of people who believe in what they do."
/>

<HeaderImage imgSrc="{IMAGE_URL}/about/ui_screen.png" />

<article class="section--md container description">
	<p>We are a remote-first company. The digital has been our ecosystem since the beginning.</p>

	<p>
		With over 12+ years of experience in the marketing and design field, we came together to build a
		team of <span class="italic">designers</span>, <span class="italic">writers</span>,
		<span class="italic">strategists</span>,
		<span class="italic">developers</span>, <span class="italic">analysts</span>, and
		<b style="font-weight: 700; color: var(--color-primary)"> doers </b>.
	</p>

	<p>
		Our collective experience and expertise allow us to deliver solutions that drive growth and
		results. We value collaboration, embracing new challenges, pushing boundaries, making our
		clients proud, and doing what we love.
	</p>
</article>

<ShineAreas />

<SlideInText />

<ArticleContent title="Simply put, we do what others don't">
	<p>
		When you work with AB Digital Marketing, you are getting a team of experts to ensure that your
		business reaches new heights. Because it's not just work, it's passion. It's not just clients,
		it's people. Every project we take on is important to us.
	</p>

	<p>
		We love what we do and we bet on the success of each and every project we undertake. As a
		dedicated digital marketing agency based in Florida, we have worked with clients of all sizes in
		a range of industries to achieve their business goals.
	</p>
</ArticleContent>

<Faq />

<ContactSection />

<style lang="scss">
	.italic {
		font-style: italic;
		color: var(--color-white);
	}
	.description {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);

		p {
			color: var(--color-white);
			font-weight: var(--fw-medium);
			font-size: var(--text-h4);
		}
	}

	@media screen and (max-width: 425px) {
		.description {
			p {
				font-size: var(--text-h5);
			}
		}
	}
</style>
