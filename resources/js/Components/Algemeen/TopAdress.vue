<script setup>

</script>

<template>
    
    <div class="mt-6 bg-[#F3F4F6]">
        <div class="flex flex-row bg-white" >
            <span class="basis-1/6"></span>
            <div class="basis-5/6 flex-col py-6 "> 
                <h2>{{ $page.props.jumbaData['Items'][0]['Filter']['Street'] }} {{ $page.props.jumbaData['Items'][0]['Filter']['Number'] }}</h2>
                <h3>{{ $page.props.jumbaData['Items'][0]['Filter']['Postcode'] }} {{ $page.props.jumbaData['Items'][0]['Filter']['City'] }}</h3>
            </div>
            <div class="col-start-4 col-span-1 py-6 my-4"> 

            </div>
        </div>
    </div>

</template>