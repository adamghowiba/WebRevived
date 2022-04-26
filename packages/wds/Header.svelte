<script lang="ts">
  export let page: string;
  export let data: { href: string };
</script>

<h4>{page}</h4>
<h1>This is a header from a shared component</h1>
<i>{data.href}</i>

<style>
</style>
