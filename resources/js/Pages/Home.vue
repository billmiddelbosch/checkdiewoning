<script setup>
import defaultLayout from '@/Layouts/defaultLayout.vue';
import Navigation from '@/Components/ComponentNavigation.vue';
import Footer from '@/Components/ComponentFooter.vue';
import Model from '@/Components/Modal.vue';
import { Head } from '@inertiajs/vue3';
import { reactive } from 'vue'
import { router } from '@inertiajs/vue3'


defineProps({
  jumbaData: {
      type: Object,
      default: null
  	}
});

const form = reactive({
  postcode: null,
  huisnr: null,
})

function submit() {
  router.post('/', form)
}

</script>


<template>
    <Head title="Home" />

    <defaultLayout>

        <template #nav>
          <Navigation :Login=false />
        </template>
        
        <template #main>
          

          <div class="flex flex-row bg-white" >

            <!-- linkse spacing -->
            <div class="basis-1/12 bg-[#F3F4F6]"></div>

            <!-- Centrale content -->
            <div class="basis-10/12">

              <!-- Content Home -->
              <div v-if="jumbaData == NULL" class="flex flex-row bg-white gap-10 p-24 " >
                <span class="flex-none basis-1/3 m-12">
                  <h1 >Woning kopen?</h1>
                  <p >Zorgeloos een woning kopen: vind hier direct en gratis alle informatie nodig om </p>
                </span>
                <form @submit.prevent="submit" class="flex-1 basis-2/3 m-12">
                  <div class="flex-column border-4">
                    <label class="m-6">
                      <span class="text-gray-700"> Postcode </span>
                      <input id="postcode" name="postcode" v-model="form.postcode"
                        class="
                          mt-1
                          block
                          w-full
                          rounded-md
                          bg-gray-100
                          border-transparent
                          focus:border-gray-500 focus:bg-white focus:ring-0"
                      >
                    </label>
                    <label class="m-6">
                      <span class="text-gray-700"> Huisnummer </span>
                      <input id="huisnr" name="huisnr" v-model="form.huisnr"
                        class="
                          mt-1
                          block
                          w-full
                          rounded-md
                          bg-gray-100
                          border-transparent
                          focus:border-gray-500 focus:bg-white focus:ring-0">
                    </label>
                  </div>
                  <div class="grid grid-cols-3 gap-10">
                      <button class="btn-orange col-span-3" type="submit">Details</button>
                  </div>

                </form>
                
              </div>
              

              <!-- Content Search Results -->

              <div v-if="jumbaData != NULL" >
                <!-- {{ jumbaData[0]['Input'] }} -->
                <table class="border-separate border-spacing-4">
                  <thead class="text-left">
                    <tr class="">
                      <th class="">Plaats</th>
                      <th class="">Straat</th>
                      <th class="">Huisnummer</th>
                      <th class="">Postcode</th>
                      <th class="text-center">Details</th>
                    </tr>
                  </thead>
                  <tbody >
                      <tr v-for="(woningen, i) in jumbaData" :key="i" class="text-left">
                        <td v-if="woningen['Filter']['City'] != ''"> {{ woningen['Filter']['City'] }} </td>
                        <td v-if="woningen['Filter']['City'] != ''"> {{ woningen['Filter']['Street'] }} </td>
                        <td v-if="woningen['Filter']['City'] != ''"> {{ woningen['Filter']['Number'] }} </td>
                        <td v-if="woningen['Filter']['City'] != ''"> {{ woningen['Filter']['Postcode'] }} </td>
                        <td v-if="woningen['Filter']['City'] != ''" class="text-center">
                          <a class="btn-blue" :href="'https://www.checkdiewoning.nl/woning/'+woningen['Filter']['City']+'/'+woningen['Filter']['Street']+'/'+woningen['Filter']['Number']">Jumba page</a>
                        </td>
                      </tr>
                  </tbody>
                </table>
              </div>
              

              </div>
              <div class="basis-1/12 bg-[#F3F4F6]"></div>
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
