<script setup>

defineProps({
    class: {
        type: String,
        default: '',
    },
    label: {
        type: String,
        default: '',
    },
    info: {
        type: String,
        default: '',
    },
});

</script>

<template>

    <p class="col-start-1"><strong>{{ label }}</strong></p>
    <p class="col-start-4">{{ info }}</p>

</template>

<style scoped>
    .v-enter-active,
    .v-leave-active {
    transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
    opacity: 0;
    }
</style>