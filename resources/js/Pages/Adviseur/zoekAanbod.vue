
<script setup>
import defaultLayout from '@/Layouts/defaultLayout.vue';
import Navigation from '@/Components/ComponentNavigation.vue';
import Footer from '@/Components/ComponentFooter.vue';
import { Head } from '@inertiajs/vue3';

import { reactive } from 'vue'
import { router } from '@inertiajs/vue3'

defineProps({
  woningen: Array
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
    <Head title="Adviseur zoek" />

    <defaultLayout>

        <template #nav>
          <Navigation :Login=true />
        </template>

        <template #main>
          <div class="py-12" >
              <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                  <div class="column bg-white overflow-hidden shadow-sm sm:rounded-lg">
                      <div class="row main">
                        <div v-for="(woning, i) in $page.woningen" :key="i">
    
                          {{ $page.woningen[i].straat }}
                          {{ $page.woningen[i].plaats }}
                          {{ $page.woningen[i].postcode }}
                          {{ $page.woningen[i].status }}

                        </div>
                        <div class="card">
                            <div class="card-header">
                                Zoek woning
                            </div>
                            <div class="card-body">
                              
                                <form @submit.prevent="submit">
                                
                                    <div class="form-floating">
                                        <span class="input-group-text" id="addon-wrapping">Postcode</span>
                                        <input type="text" class="form-control" id="postcode" name="postcode" v-model="form.postcode">
                                        <span class="input-group-text" id="addon-wrapping">Datum</span>
                                        <input type="text" class="form-control" id="datum" name="datum" v-model="form.datum">
                                        <button class="btn-orange" type="submit">Search</button>
                                    </div>
                                </form>
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
