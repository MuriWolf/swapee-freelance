<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
    import * as Card from '$lib/components/ui/card/index';
    import { Input } from "$lib/components/ui/input";
    import { scale } from 'svelte/transition';

    export let data;

    let filteredGigs = data.gigs;
    let minBudget: string | undefined;
    let maxBudget: string | undefined;

    function filterGigs() {
        const minValue = parseFloat(minBudget!);
        const maxValue = parseFloat(maxBudget!);
        filteredGigs = data.gigs.filter((gig: any) => {
            if ((isNaN(minValue) || gig.startingAt.price >= minValue) && (isNaN(maxValue) || gig.startingAt.price <= maxValue)) {
                return gig;
            }
        })
        filteredGigs = filteredGigs;
    }

    function resetFilters() {
        minBudget = undefined;
        maxBudget = undefined;
        filterGigs()
    }
</script>

<main class="mx-auto max-w-5xl mt-4">
    <form class="flex gap-x-4 items-center">
        <p>budget:</p>
        <Input type="number" placeholder="min" bind:value={minBudget} />
        <Input type="number" placeholder="max" bind:value={maxBudget} />
        <Button on:click={filterGigs}>Apply</Button>
    </form>
    {#if data}  
        <h1 class="text-2xl font-bold mt-4">{data.category}</h1>
        
        {#if data.gigs.length > 0}
            {#if filteredGigs.length > 0}
                <section class="grid grid-cols-4 gap-6 mt-6">
                    {#each filteredGigs as gig}
                        <a href={`${gig.user.username}/${gig.slug}`} transition:scale>
                            <Card.Root>
                                <Card.Header>
                                    {#each gig.imagesSrc as imgSrc}
                                        <img src={imgSrc} alt="">
                                    {/each}
                                </Card.Header>
                                <Card.Content>
                                    <p>{gig.user.name}</p>
                                    <Card.Title>{gig.title}</Card.Title>
                                </Card.Content>
                                <Card.Footer>
                                <p>Starting at: BTC {gig.startingAt.price}</p>
                                </Card.Footer>
                            </Card.Root>
                        </a>
                    {/each}
                </section>
            {:else}
                <p class="mt-6">We couldn't found any gigs with these filters! </p>
                <Button class="mt-3" on:click={resetFilters}>Reset Filters</Button>
            {/if}
        {:else}
            <p class="mt-6">Nos gigs found. :(</p>
        {/if}
    {/if}
</main>