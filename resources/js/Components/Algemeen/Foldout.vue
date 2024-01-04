<script setup>

defineProps({
    propClass: {
        type: String,
        default: '',
    },
    header: {
        type: String,
        default: '',
    },
    propShow: {
        type: Boolean,
        default: true,
    }
});

</script>

<template>

    <div class="">
 
        <div @click="propShow = !propShow" class="grid grid-cols-12">
            <h2 class="col-span-10">{{ header }}</h2>
            <p v-if="propShow" class="col-start-11 flex items-center font-bold">&#8743;</p>
            <p v-if="!propShow" class="col-start-11 flex items-center font-bold">&#8744;</p>
        </div>

        <TransitionGroup class="grid grid-cols-12">
            <slot v-if="propShow" class="col-start-1" />
        </TransitionGroup>

    </div>

</template>

<style scoped>

    .v-enter-active,
    .v-leave-active {
    transition: opacity 1s ease;
    }

    .v-enter-from,
    .v-leave-to {
    opacity: 0;
    }


</style>