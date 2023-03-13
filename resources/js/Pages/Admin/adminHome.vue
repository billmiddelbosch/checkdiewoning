<script setup>
import defaultLayout from '@/Layouts/defaultLayout.vue';
import Navigation from '@/Components/Algemeen/ComponentNavigation.vue';
import Footer from '@/Components/Algemeen/ComponentFooter.vue';
import { Head, Link } from '@inertiajs/vue3';

defineProps({
  woningen: Array
});


</script>

<template>
    <Head title="Admin Dashboard" />

    <defaultLayout>
        <template #nav>
          <Navigation :Login=true />
        </template>

        <template #main>
            <div class="py-12">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div class="basis-0 ">
                            <div class="flex flex-row p-10 ">
                                <div class="basis-1/2" >
                                    <h1 class="mx-10">Laden nieuw aanbod</h1>
                                    <p class="pr-10">Gebruik de knop hier naast om het gewijzigde aanbod van
                                        vandaag te laden in de database.
                                    </p>
                                </div>
                                <div class="basis-1/2 " >
                                    <Link :href="route('xml-dailyRun')" class="btn btn-blue">Nieuw aanbod</Link>
                                </div>
                            </div> 
                            <div class="flex flex-row p-10 ">
                                <div class="basis-1/2" >
                                    <h1 class="mx-10">Housekeeping</h1>
                                    <p class="pr-10">Gebruik de knop hier naast om oud aanbod van 2 maanden geleden te refreshen 
                                        in de database.
                                    </p>
                                </div>
                                <div class="basis-1/2 " >
                                    <Link :href="route('xml-Housekeeping')" class="btn btn-blue">Housekeeping</Link>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <template #footer>
            <Footer />
        </template>


    </defaultLayout>
</template>
