<script lang="ts">
    import * as Carousel from "$lib/components/ui/carousel/index.js";

    export let data: any;

    if (data) {
        console.log(data.categories);
    } 
</script>

{#if data.categories}

<Carousel.Root>
    <Carousel.Content>
        {#each data.categories as category} 
            <a href={`/gigs?category=${category.urlName}`}>
                <Carousel.Item class="basis-1/4 h-[400px]">
                    <h1 class="text-xl">{category.title}</h1>
                    <p>{category.subtitle}</p>
                    <img src={category.imgSrc} class="h-full" alt="">
                </Carousel.Item>
            </a>
        {/each}
        </Carousel.Content>
        <Carousel.Previous />
        <Carousel.Next />
    </Carousel.Root>
{/if}
