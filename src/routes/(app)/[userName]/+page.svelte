<script type="ts">
    export let data;
    console.log(data);


</script>

<!-- TA VINDO ARRAY AO INVES DE SÓ UM OBJT -->
{#if data.userSearched.returnData[0]}
    <p>{data.userSearched.returnData[0].username}</p>
{/if}