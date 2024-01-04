<script setup>
import defaultLayout from '@/Layouts/defaultLayout.vue';
import Navigation from '@/Components/Algemeen/ComponentNavigation.vue';
import Footer from '@/Components/Algemeen/ComponentFooter.vue';
import Breadcrum from '@/Components/Breadcrum.vue';
import TopAdress from '@/Components/Algemeen/TopAdress.vue';
import TopFotos from '@/Components/TopFotos.vue';
import SubMenu from '@/Components/SubMenu.vue';
import PropertyDetails from '@/Components/PropertyDetails.vue';
import { Head } from '@inertiajs/vue3';


defineProps({
    isaluData: Object,
    items: Array
});

</script>


<template>
    <Head title="Home" />

    <defaultLayout>

        <template #nav>
          <Navigation :Login=false />
        </template>

        <template #main>

            {{ isaluData }}


        </template>

        <template #footer>
            <Footer />
        </template>

    </defaultLayout>

</template>


<style scoped>

</style>
