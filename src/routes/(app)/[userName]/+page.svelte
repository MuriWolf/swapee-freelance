<script type="ts">
    export let data;
    console.log(data.userSearched);


</script>

<!-- TA VINDO ARRAY AO INVES DE SÓ UM OBJT -->
{#if data.userSearched}
    <ul class="m-4">
        <li>
            <p><strong>Name:</strong> {data.userSearched.name}</p>
        </li>
        <li>
            <p><strong>Username:</strong> {data.userSearched.username}</p>
        </li>
        <li>
            <p><strong>Country:</strong> {data.userSearched.country}</p>
        </li>
        <li>
            <p><strong>Languages:</strong> {data.userSearched.languages[0]}</p>
        </li>
        <li>
            <p><strong>Avarage Response Time Hours:</strong> {data.userSearched.avarageResponseTimeHours}</p>
        </li>
        <li>
            <p><strong>Stars:</strong> {data.userSearched.averageStars}</p>
        </li>
    </ul>
{/if}