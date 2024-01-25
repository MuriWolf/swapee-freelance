<script lang="ts">
    import * as Card from '$lib/components/ui/card/index';
    import { Input } from "$lib/components/ui/input";

    export let data;
</script>

<main class="mx-auto max-w-5xl mt-4">
    <form class="flex gap-x-4 items-center">
        <p>budget:</p>
        <Input type="text" placeholder="min" />
        <Input type="text" placeholder="max" />
    </form>
    {#if data}  
        <h1 class="text-xl">{data.category}</h1>
        
        {#if data.gigsFiltered.length > 0}
            <section class="grid grid-cols-4 gap-6">
                {#each data.gigsFiltered as gig}
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
                {/each}
            </section>
        {:else}
            <p>Nos gigs found. :(</p>
        {/if}
    {/if}
</main>