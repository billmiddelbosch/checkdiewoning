<script setup>

defineProps({
    jumbaData: Object
});

</script>

<template>
    
    <div class="grid grid-cols-14 py-6 bg-[#E3E9E]" >
        <div class="col-start-2 col-span-12 space-x-4 "> 
            <span> 
                Home  
            </span>
            <span> 
                >
            </span>
            <span> 
                {{ jumbaData.Filter.Province }}  
            </span>
            <span> 
                >
            </span>
            <span> 
                {{ jumbaData.Filter.City }}           
            </span>
            <span> 
                >
            </span>
            <span> 
                {{ jumbaData.Filter.Street }} {{ jumbaData.Filter.Number }}         
            </span>
        </div>
    </div>

</template>