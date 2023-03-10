<script setup>
import Kenmerken from '@/Components/Kenmerken.vue';

</script>

<template>
    
    <div class="flex flex-row bg-white" >

            <kenmerken :kenmerken="[
                {
                name: '',
                data: ''
                },                {
                name: 'type buurt',
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

</template>