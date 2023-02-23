<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/vue3';

defineProps({
  woningen: Array
});


</script>

<template>
    <Head title="Admin Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Admin</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="basis-0 ">
                        <div class="flex flex-row p-10 ">
                            <div class="basis-1/2" >
                                <h1 class="mx-10">Welkom</h1>
                                <p class="pr-10">Welkom op de Admin pagina. Gebruik de knop hier naast om het gewijzigde aanbod van
                                    vandaag te laden in de database.
                                </p>
                            </div>
                            <div class="basis-1/2 " >
                                <Link :href="route('xml-dailyRun')" class="btn btn-blue">Nieuw aanbod inladen</Link>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
