<script setup>

defineProps({
    kenmerken: Array
})

</script>

<template>

    <div class="grid cols-6 p-4">
        <div 
        v-for="(kenmerk, index) in kenmerken" :key="index"
        :class="'space-y-4 col-start-' + index" 
        >
            <p class="flex justify-center text-sm"> {{ kenmerk.name }}  </p>
            <p class="flex justify-center">{{ kenmerk.data }} </p>
        </div>
    </div>

</template>