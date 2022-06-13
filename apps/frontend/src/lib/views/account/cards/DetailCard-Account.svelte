<script lang="ts">
	import CardBase from '$lib/components/global/CardBase.svelte';

	export let accountName: string;
	export let phone: string;
	export let industry: string;
	export let city: string;
</script>

<CardBase>
	<div class="items">
		<div class="items__item">
			<span class="items__key">Account Name: </span>
			<span class="items__value">{accountName} </span>
		</div>
        <div class="items__item">
			<span class="items__key">Phone: </span>
			<span class="items__value">{phone} </span>
		</div>
        <div class="items__item">
			<span class="items__key">Industry: </span>
			<span class="items__value">{industry} </span>
		</div>
        <div class="items__item">
			<span class="items__key">City: </span>
			<span class="items__value">{city} </span>
		</div>
	</div>
</CardBase>

<style lang="scss">
	.items {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
		padding: var(--space-xs) var(--space-md);

        &__item {
            display: grid;
            grid-template-columns: 0.15fr 1fr;
            gap: var(--space-xs);
        }

		&__key {
			font-weight: var(--fw-medium);
		}

		&__value {
			font-weight: var(--fw-normal);
		}
	}
</style>
