<script lang="ts">
    import * as Carousel from "$lib/components/ui/carousel/index.js";

    export let data: any;

    if (data) {
        console.log(data.categories);
    } 
</script>

<main class="mx-auto my-4">
    {#if data.categories}
    <Carousel.Root opts={{
        dragFree: true,
    }}>
        <Carousel.Content class="gap-4 m-4 my-6">
            {#each data.categories as category} 
            <Carousel.Item class="block relative :basis-1/2 shadow-lg shadow-gray-300 p-4 rounded-md">
                <a href={`/gigs?category=${category.urlName}`} class="">
                    <h1 class="text-2xl text-gray-700 font-Bebas-Neue font-bold uppercase tracking-wider" >{category.title}</h1>
                    <p class="text-gray-500">{category.subtitle}</p>
                    <img src={category.imgSrc} class="mt-4 h-auto max-h-[350px]" alt="">
                </a>
                </Carousel.Item>
            {/each}
        </Carousel.Content>
        <!-- <Carousel.Previous />
        <Carousel.Next /> -->
    </Carousel.Root>
    {/if}
</main>