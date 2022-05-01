<script lang="ts">
	import Button from '../buttons/Button.svelte';

	export let button: ButtonData;
</script>

<section class="cta">
	<h1><slot /></h1>
	<Button href={button.href} color="black">{button.text}</Button>
</section>

<style lang="scss">
    .cta {
        display: flex;
        flex-direction: column;
        gap: var(--space-md);
        justify-content: center;
        align-items: center;
        background-color: var(--color-primary);
        color: var(--color-black);
        padding: var(--space-2xl) var(--space-xs);

        h1 {
            max-width: 20ch;
            text-align: center;
            font-weight: var(--fw-bold);
        }
}
</style>
