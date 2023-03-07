<script setup>

defineProps({
    items: Array
})

</script>

<template>
    
    <div class="flex flex-row bg-white" >
        <div class="basis-1/12 bg-[#F3F4F6]"></div>
        <div class="basis-10/12">

            <div class="grid grid-col-14 border-b-8 border-[#F3F4F6]">
                <span class="col-start-2 col-span-6 space-x-12 py-6"> 
                    <span v-for="(item, index) in items" class="p-4 hover:bg-[#E74650]" :key="index"> {{ item }} </span>
                </span>
                <span class="col-start-8 col-span-2 py-6">Alle media</span>
            </div>

        </div>
        <div class="basis-1/12 bg-[#F3F4F6]"></div>
    </div>

</template>