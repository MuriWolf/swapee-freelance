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
    {#if data}  
    <h1 class="text-4xl font-Bebas-Neue uppercase tracking-wider font-bold mt-4">{data.category}</h1>
    <p class="text-gray-500 mb-12">Explore the boundaries of art and technology with Swapee's {data.category} artists</p>
    <form class="flex gap-x-4 items-center mt-4 mb-12">
        <p class="font-semibold text-lg">budget:</p>
        <Input type="number" placeholder="min" bind:value={minBudget} />
        <Input type="number" placeholder="max" bind:value={maxBudget} />
        <Button on:click={filterGigs} class="bg-swapee-purple hover:bg-swapee-purple active:scale-[0.98] active:border-b-2 transition-all border-2 border-b-4 border-black">Apply</Button>
    </form>
        
        {#if data.gigs.length > 0}
            {#if filteredGigs.length > 0}
                <section class="grid grid-cols-4 gap-6 mt-6 items-stretch">
                    {#each filteredGigs as gig}
                        <a href={`${gig.user.username}/${gig.slug}`} transition:scale>
                            <Card.Root class="shadow-lg shadow-gray-300 h-full border-[1px] border-black overflow-hidden">
                                <Card.Header class="px-0 py-0 mb-4 border-b-[1px] border-black">
                                    {#each gig.imagesSrc as imgSrc}
                                        <img src={imgSrc} alt="">
                                    {/each}
                                </Card.Header>
                                <Card.Content class="flex flex-wrap gap-y-4 items-center">
                                    <img src={gig.user.profileImageSrc} class="w-8 h-8 rounded-full mr-2" alt="">
                                    <p class="mb-2">{gig.user.name}</p>
                                    <Card.Title class="flex-1">{gig.title}</Card.Title>
                                </Card.Content>
                                <Card.Footer>
                                <p>Starting at: <span class="text-swapee-purple font-bold">BTC {gig.startingAt.price}</span></p>
                                </Card.Footer>
                            </Card.Root>
                        </a>
                    {/each}
                </section>
            {:else}
                <p class="mt-6">We couldn't found any gigs with these filters! </p>
                <Button class="mt-3 bg-swapee-purple hover:bg-swapee-purple active:scale-[0.98] active:border-b-2 transition-all border-2 border-b-4 border-black " on:click={resetFilters}>Reset Filters</Button>
            {/if}
        {:else}
            <p class="mt-6">Nos gigs found. :(</p>
        {/if}
    {/if}
</main>