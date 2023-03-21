<script setup>
import defaultLayout from '@/Layouts/defaultLayout.vue';
import Navigation from '@/Components/Algemeen/ComponentNavigation.vue';
import Footer from '@/Components/Algemeen/ComponentFooter.vue';
import { reactive } from 'vue'
import { Head } from '@inertiajs/vue3';
import { router } from '@inertiajs/vue3';


defineProps({
  products: Array
});

// Klant gegevens opslaan
const form = reactive({
  naam: null,
  email: null,
})

function submit() {
  router.post('/orders', form)
}

</script>

<template>
    <Head title="Products Overview" />

    <defaultLayout>
        <template #nav>
          <Navigation :Login=true />
        </template>

        <template #main>
            <div>    
                <form @submit.prevent="submit">
                    <div class="flex-column">
                        <label class="m-6">
                        <span class="flex flex-cols-6 gap-12">
                            <input id="naam" name="naam" v-model="form.naam" placeholder="Adviseur naam"
                                class="
                                col-start-1
                                col-span-2
                                pl-4
                                place-content-center
                                block
                                w-1/2
                                h-12
                                rounded-md
                                bg-gray-100
                                border-transparent
                                focus:border-gray-500 focus:bg-white focus:ring-0"
                            >
                            <input id="email" name="email" v-model="form.email" placeholder="Adviseur email"
                                class="
                                col-start-2
                                col-span-2
                                pl-4
                                place-content-center
                                block
                                w-1/2
                                h-12
                                rounded-md
                                bg-gray-100
                                border-transparent
                                focus:border-gray-500 focus:bg-white focus:ring-0"
                            >
                            <div class="grid col-start-3">
                                <button class="btn-blue" type="submit">Selecteer</button>
                            </div>
                            </span>
                        </label>
                    </div>
                </form>

                {{ products[0]['productNaam'] }}

            </div>
        </template>

        <template #footer>
            <Footer />
        </template>


    </defaultLayout>
</template>
