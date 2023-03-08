<script setup>
import Kenmerken from '@/Components/Kenmerken.vue';
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

            <kenmerken v-if="menu != 0" :key='id' :kenmerken="[
                {
                name: '',
                data: ''
                },                {
                name: 'type',
                data: $page.props.jumbaData.Payload.Type
                },
                {
                name: 'Woon',
                data: $page.props.jumbaData.Payload.Size
                },
                {
                name: 'perceel',
                data: $page.props.jumbaData.Payload.PerceelSize
                },
                {
                name: 'bouwjaar',
                data: $page.props.jumbaData.Payload.Build
                },
                {
                name: 'kamers',
                data: $page.props.jumbaData.Payload.Rooms
                },
                {
                name: 'energielabel',
                data: $page.props.jumbaData.Payload.EnergylabelEstimate
                },
            ]" />

            <div v-if="menu != 0" class="p-8 border-b-8 border-[#F3F4F6]">
                <h3 class="font-bold tracking-wide">Omschrijving</h3>
                <p>{{ $page.props.jumbaData.Payload.Funda.Description }}</p>

                <h3 class="font-bold tracking-wide space-y-2">Kenmerken algemeen</h3>
                <div class="grid grid-cols-8 space-y-2">
                    <span class="col-start-1 col-span-2 tracking-wide">Type woning</span>
                    <span class="col-start-3 ">{{ $page.props.jumbaData.Payload.Type }}</span>
                    <span class="col-start-1 col-span-2 tracking-wide">Woon oppervlakte</span>
                    <span class="col-start-3 ">{{ $page.props.jumbaData.Payload.Size }}</span>
                    <span class="col-start-1 col-span-2 tracking-wide">Perceel oppervlakte</span>
                    <span class="col-start-3 ">{{ $page.props.jumbaData.Payload.PerceelSize }}</span>
                </div>
            </div>
        </div>

        <div class="basis-1/12 bg-[#F3F4F6]"></div>
    </div>

</template>