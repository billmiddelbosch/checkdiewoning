<script setup>
import { defineProps } from "vue";

const props = defineProps({
  gelditTot: String,
});


//Items[0].Payload.Properties.Energylabel.ValidUntil;

</script>

<template>
    
    <div class="mt-6 bg-[#F3F4F6]">
        <div class="flex flex-row bg-white" >
            <span class="basis-1/6"></span>
            <div class="basis-2/6 flex-col grid content-center "> 
                <h2 class="capitalize">{{ $page.props.jumbaData['Items'][0]['Filter']['Street'] }} <span class="uppercase">{{ $page.props.jumbaData['Items'][0]['Filter']['Number'] }}</span></h2>
                <h3 class="text-[#E64750] capitalize"><span class="uppercase" >{{ $page.props.jumbaData['Items'][0]['Filter']['Postcode'] }}</span> {{ $page.props.jumbaData['Items'][0]['Filter']['City'] }}</h3>
            </div>
            <div class="basis-2/6 flex-col grid content-center justify-items-end py-6"> 
                <p class="text-xl font-bold">€ {{ $page.props.jumbaData['Items'][0]['Payload']['JumbaValue'][0] }} - € {{ $page.props.jumbaData['Items'][0]['Payload']['JumbaValue'][1] }}</p>
                <p class="text-[#E64750]">Onze waarde inschatting</p>
                <p class="text-xl font-bold pt-2"> {{ $page.props.jumbaData['Items'][0]['Payload']['Properties']['Energylabel']['LabelClass'] }} 
                <!-- <span class="text-base font-normal"> geldig tot {{ gelditTot }} </span> -->
                </p>
                <p class="text-[#E64750]">Het energielabel</p>
            </div>
            <span class="basis-1/6"></span>
        </div>
    </div>

</template>