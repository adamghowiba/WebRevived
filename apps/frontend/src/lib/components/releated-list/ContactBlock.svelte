<script lang="ts">
	export let imgSrc: string = undefined;
	export let name: string;
	export let email: string;
</script>

<div class="contact">
	<img src={imgSrc ? imgSrc : '/images/blank_avatar.png'} alt="" />
	<div class="details">
		<span class="details__name">
			{name}
		</span>
		<span class="details__email">
			{email}
		</span>
	</div>
</div>

<style lang="scss">
	.contact {
		display: flex;
		gap: var(--space-xs);

		img {
			width: 35px;
			height: 35px;
			border-radius: 50%;
		}
	}

	.details {
		display: flex;
		flex-direction: column;
		gap: var(--space-3xs);
        
		&__name {
			text-transform: capitalize;
		}
	}
</style>
