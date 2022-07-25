<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ error }) => {
		const {message, name, stack} = error;
        
        return {
			props: {
                message,
                name,
                stack
            }
		};
	};
</script>

<script lang="ts">
    export let message: string;
    export let name: string;
    export let stack: string;
</script>

<main>
	<h4>{name} {name} </h4>
    <p>{stack}</p>
</main>

<style lang="scss">
main {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    max-width: 400px;
    align-items: center;
    justify-content: center;
    margin: var(--space-5xl) auto;
}

</style>
