<script setup>
import defaultLayout from '@/Layouts/defaultLayout.vue';
import Navigation from '@/Components/ComponentNavigation.vue';
import Footer from '@/Components/ComponentFooter.vue';
import Breadcrum from '@/Components/Breadcrum.vue';
import TopAdress from '@/Components/TopAdress.vue';
import TopFotos from '@/Components/TopFotos.vue';
import SubMenu from '@/Components/SubMenu.vue';
import PropertyDetails from '@/Components/PropertyDetails.vue';
import { Head } from '@inertiajs/vue3';

defineProps({
    jumbaData: Object,
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

            <Breadcrum :jumbaData="jumbaData"/>
            
            <TopAdress :jumbaData="jumbaData"/>

            <TopFotos :jumbaData="jumbaData"/>

            <SubMenu :items="['Algemeen','Data','Waarde']"/>

            <PropertyDetails :jumbaData="jumbaData"/>


        </template>

        <template #footer>
            <Footer />
        </template>

    </defaultLayout>

</template>


<style scoped>

</style>
