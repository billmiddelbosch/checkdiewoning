<script setup>
import AlgemeenDetails from '@/Components/AlgemeenDetails.vue';
import BuurtDetails from '@/Components/BuurtDetails.vue';
import KostenDetails from '@/Components/KostenDetails.vue';
import { ref } from 'vue';

defineProps({
  items: {
      type: Array,
      default: null
  	}
})

const menu = ref(0)

function select(index) {
    menu.value = index
}

</script>

<template>
    
    <div class="flex flex-row bg-white" >
        
        <div class="basis-1/12 bg-[#F3F4F6]"></div>
        <div class="basis-10/12 bg-white space-y-8">
            
            <div class="grid grid-col-14 p-8 border-b-8 border-[#F3F4F6]">
                <span class="col-start-2 col-span-6 space-x-12 py-6"> 
                    <button @click="select(index)" v-for="(item, index) in items" :key="index" class="p-4 hover:bg-[#E74650]"> {{ item }} </button>
                </span>
                <span class="col-start-8 col-span-2 py-6">Alle media</span>
            </div>

            <AlgemeenDetails v-if="menu == 0" />

            <BuurtDetails v-if="menu == 1" />

            <KostenDetails v-if="menu == 2" />

        </div>

        <div class="basis-1/12 bg-[#F3F4F6]"></div>
    </div>

</template>