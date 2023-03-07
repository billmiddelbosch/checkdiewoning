<script setup>


</script>

<template>
    
    <div class="flex flex-row bg-[#E3E9E]" >
        <div class="basis-1/12"></div>
        <div class="basis-7/12">
            <div class="grid grid-rows-1 grid-flow-col">
                <img class="row-span-2 col-span-2" :src="$page.props.jumbaData.Payload.Image">
                <div class="">
                    <img class="col-span-1" :src="$page.props.jumbaData.Payload.Image">
                    <img class="col-span-1" :src="$page.props.jumbaData.Payload.Image">
                </div>
            </div>
        </div>
        <div class="basis-3/12 px-12 py-24 bg-[#E74650]" >
            <div class="grid grid-rows-2 grid-flow-col text-white">
                <p>Vraagprijs van deze woning</p>
                <h2> € {{ $page.props.jumbaData.Parameters.Price}}</h2>
            </div>
        </div>
        <div class="basis-1/12"></div>
    </div>

</template>