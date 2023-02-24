
<script setup>
import defaultLayout from '@/Layouts/defaultLayout.vue';
import Navigation from '@/Components/ComponentNavigation.vue';
import Footer from '@/Components/ComponentFooter.vue';
import { Head } from '@inertiajs/vue3';

import { reactive } from 'vue'
import { router } from '@inertiajs/vue3'

defineProps({
  woningen: {
      type: Array,
      default: []
  	},
  results: {
      type: Boolean,
      default: false
  	}
});

const form = reactive({
  postcode: null,
  datum: null,
})

function submit() {
  router.post('/adviseur', form)
}

</script>


<template>
    <Head title="Adviseur home" />

    <defaultLayout>

        <template #nav>
          <Navigation :Login=true />
        </template>

        <template #main>
          <div class="py-12" >
              <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                  <div class="column bg-white overflow-hidden shadow-sm sm:rounded-lg">
                      <div class="grid grid-cols-3 gap-20 m-10">

                        <div class="basis-1/4">
                            <h3>Zoek woning aanbod</h3>
                              
                              <form @submit.prevent="submit" class="grid grid-rows-3 gap-4 justify-items-center">
                              
                                  <div class="grid grid-cols-3 gap-10">
                                      <span class="form-label" id="addon-wrapping">Postcode</span>
                                      <input type="text" class="form-input col-span-2" id="postcode" name="postcode" v-model="form.postcode">
                                  </div>
                                  <div class="grid grid-cols-3 gap-10">
                                      <span class="form-label" id="addon-wrapping">Datum</span>
                                      <input type="text" class="form-input col-span-2" id="datum" name="datum" v-model="form.datum">
                                  </div>
                                  <div class="grid grid-cols-3 gap-10">
                                      <button class="btn-orange col-span-3" type="submit">Search</button>
                                  </div>
                              </form>

                        </div>

                        <div v-if="results" class="col-span-2">

                          <h3> Woningen te koop</h3>
                          <table class="border-separate border-spacing-4">
                            <thead class="text-left">
                              <tr class="">
                                <th class="">Plaats</th>
                                <th class="">Straat</th>
                                <th class="">Postcode</th>
                                <th class="text-center">Details</th>
                              </tr>
                            </thead>
                            <tbody v-for="(woning, i) in woningen" :key="i">
                                <tr class="text-left">                              
                                  <td class="">{{ woningen[i].plaats }}</td>
                                  <td class="">{{ woningen[i].straat }}</td>
                                  <td class="">{{ woningen[i].postcode }}</td>
                                  <td class="text-center">
                                    <a class="btn-blue" :href="'https://www.jumba.nl/'+woningen[i].plaats+'/'+woningen[i].straat+'/'+woningen[i].nr+woningen[i].addition">Jumba page</a>
                                  </td>
                                </tr>
                            </tbody>
                          </table>
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



<style scoped>
h2 {
  font-size: 44px;
  font-weight: 300;
  text-transform: uppercase;
}

h3 {
  font-size: 26px;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 32px;
}

h4 {
  font-weight: bold;
}

.wrapper {
  padding: 64px 0;
}

@media (min-width: 240px) and (max-width: 720px) {
  h2 {
    font-size: 36px;
    margin-bottom: 32px;
  }

  h3 {
    font-size: 20px;
  }

  .wrapper {
    padding-bottom: 32px;
  }
}
</style>
