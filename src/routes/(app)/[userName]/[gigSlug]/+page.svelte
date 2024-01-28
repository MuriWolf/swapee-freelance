<script lang="ts">
    export let data;

    console.log(data);
    
</script>


<main class="max-w-5xl mx-auto my-6">
    {#if data}
        <h1 class="text-3xl font-Bebas-Neue uppercase tracking-wider font-semibold mb-6">{data.title}</h1>
        <div class="flex gap-4 items-center mb-6">
            <div class="h-12 w-12 rounded-full overflow-hidden">
                <img src={data.user.profileImageSrc} alt="" class="h-full">
            </div>
            <p>{data.user.name}</p>
            <p class="flex items-center gap-2 font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="20" width="20" ><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                {data.user.averageStars}
            </p>
        </div>
        {#each data.imagesSrc as imgSrc}
            <img src={imgSrc} alt="">
        {/each}
        <section class="mt-6 mb-3">
            <h2 class="text-2xl font-Bebas-Neue uppercase tracking-wider font-semibold">About this gig</h2>
            <p class="max-w-2xl">{data.description}</p>
        </section>
        <section class="mt-6 mb-6">
            <h2 class="text-2xl font-Bebas-Neue uppercase tracking-wider font-semibold mb-3">About the seller</h2>
            <div class="flex gap-6">
                <div class="h-24 w-24 rounded-full overflow-hidden">
                    <img src={data.user.profileImageSrc} alt="" class="h-full">
                </div>
                <div>
                    <p class="font-semibold">{data.user.name}</p>
                    <p class="flex items-center gap-2 font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="20" width="20" ><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                        {data.user.averageStars}
                    </p>
                </div>
            </div>
        </section>
        <section class="border-[1px] border-black rounded-md p-4">
            <ul class="grid grid-cols-2 xl:grid-cols-3 gap-y-3">
                <li>
                    <h3>From</h3>
                    <p class="font-medium">{data.user.country}</p>
                </li>
                <li>
                    <h3>Member since</h3>
                    <p class="font-medium">{data.user.memberSince}</p>
                </li>
                <li>
                    <h3>Avg. response time</h3>
                    <p class="font-medium">{data.user.avarageResponseTimeHours} Hours</p>
                </li>
                <li>
                    <h3>Last delivery</h3>
                    <p class="font-medium">{data.user.lastDeliveryDays} days</p>
                </li>
                <li>
                    <h3>Languages</h3>
                    <p class="font-medium">{data.user.languages[0]}</p>
                </li>
            </ul>
            <hr class="my-6 border-black">
            {data.user.description}
        </section>
    {/if}
</main>