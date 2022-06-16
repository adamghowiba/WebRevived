<script lang="ts">
	export let items: { name: string; value: any }[];
    export let value: any;
</script>

<select bind:value>
	{#each items as item}
		<option value={item.value}>{item.name}</option>
	{/each}
</select>

<style lang="scss">
    select {
        appearance: none;
        border: none;
        outline: none;      
    }
</style>
