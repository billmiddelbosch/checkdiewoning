<script setup>

defineProps({
    class: {
        type: String,
        default: '',
    },
    title: {
        type: String,
        default: '',
    },
    addText: {
        type: String,
        default: '',
    },
    // image: {
    //     type: String,
    //     default: '',
    // },
    CTA: {
        type: String,
        default: '',
    },
    price: {
        type: String,
        default: '',
    },
});

</script>

<template>
    <div id="Card" :class="$props.class" class="border-2 p-6 rounded-md shadow-md cursor-pointer h-36">
        <!-- <img v-if="image != ''" class="col-span-2" src="@/../../resources/assets/Jumba logo-klein.png" /> -->
        <h3 v-if="price" class="col-span-2">€ {{ $props.price }}</h3>
        <h2 v-if="title" class="text-center">{{ $props.title }}</h2>
        <p v-if="addText" class="">{{ $props.addText }}</p>
        <slot />
    </div>
</template>