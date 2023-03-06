<script setup>

defineProps({
    jumbaData: Object
})

</script>

<template>
    
    <div class="flex flex-row bg-white" >
        <div class="basis-1/12 bg-[#F3F4F6]"></div>
        <div class="basis-10/12 bg-white p-8 space-y-8">

            <h3 class="font-bold tracking-wide">Omschrijving</h3>
            <p>{{ jumbaData.Payload.Funda.Description }}</p>

            <h3 class="font-bold tracking-wide space-y-2">Kenmerken algemeen</h3>
            <div class="grid grid-cols-8 space-y-2">
                <span class="col-start-1 col-span-2 tracking-wide">Type woning</span>
                <span class="col-start-3 ">{{ jumbaData.Payload.Type }}</span>
                <span class="col-start-1 col-span-2 tracking-wide">Woon oppervlakte</span>
                <span class="col-start-3 ">{{ jumbaData.Payload.Size }}</span>
                <span class="col-start-1 col-span-2 tracking-wide">Perceel oppervlakte</span>
                <span class="col-start-3 ">{{ jumbaData.Payload.PerceelSize }}</span>
            </div>
        </div>
        <div class="basis-1/12 bg-[#F3F4F6]"></div>
    </div>

</template>