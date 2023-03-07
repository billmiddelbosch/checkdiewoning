<script setup>


</script>

<template>
    
    <div class="grid grid-cols-15 bg-white" >
        <div class="col-start-2 col-span-2 py-6 "> 
            <span class="px-12">
                <h2> {{ $page.props.jumbaData.Filter.Street }} {{ $page.props.jumbaData.Filter.Number }} </h2>
            </span>
            <span class="px-12 text-[#E74650]">
                <p> {{ $page.props.jumbaData.Filter.Postcode }} | {{ $page.props.jumbaData.Filter.City }} </p>
            </span>
        </div>
        <div class="col-start-4 col-span-1 py-6 my-4"> 
            <div>
                <a class="btn btn-blue">wijzigen</a>
            </div>
            <div class="row-2">
                <a class="btn btn-orange">volgen</a>
                <a class="btn btn-orange">delen</a>
            </div>
        </div>
    </div>

</template>