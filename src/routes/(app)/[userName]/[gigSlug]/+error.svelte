<script lang="ts">
	import { page } from '$app/stores';
    import Button from '$lib/components/ui/button/button.svelte';
</script>

<h1 class="text-xl font-bold p-4"><span class="text-red-400 text-3xl">{$page.status}</span> Gig {$page.error?.message}</h1>

<Button class="m-4" on:click={() => history.back()}>Go back</Button>