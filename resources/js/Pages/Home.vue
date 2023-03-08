<script setup>
import defaultLayout from '@/Layouts/defaultLayout.vue';
import Navigation from '@/Components/ComponentNavigation.vue';
import Footer from '@/Components/ComponentFooter.vue';
import Modal from '@/Components/Modal.vue';
import { Head } from '@inertiajs/vue3';
import { reactive } from 'vue'
import { router } from '@inertiajs/vue3'

defineProps({
  jumbaData: {
      type: Object,
      default: null
  	}
});


const closeModal = () => {
    $props.jumbaData = null;
};

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
              <div v-if="jumbaData == NULL" class="flex flex-row bg-white gap-10 lg:p-24 " >
                <span class="flex-none basis-1/3 m-12">
                  <h1>Woning kopen?</h1>
                  <h3>Laat ons helpen</h3>
                </span>
                <form @submit.prevent="submit" class="flex-1 basis-2/3 m-12">
                  <div class="flex-column border-4">
                      <label class="m-6 text-center">
                        <h3 class="text-gray-700 text-center"> Straat of Postcode </h3>
                        <input id="postcode" name="postcode" v-model="form.postcode"
                          class="
                            pl-12
                            mb-6
                            place-content-center
                            block
                            w-full
                            h-16
                            rounded-md
                            bg-gray-100
                            border-transparent
                            focus:border-gray-500 focus:bg-white focus:ring-0"
                        >
                      </label>
                  </div>
                  <div class="grid grid-cols-3 gap-10">
                      <button class="btn-orange col-span-3 uppercase tracking-[.25em]" type="submit">Zoek</button>
                  </div>

                </form>
                
              </div>
              

              <!-- Content Search Results -->
              <Modal v-if="jumbaData != NULL" class="flex flex-row bg-white gap-10 p-24" :show=true maxWidth="2xl" @close="closeModal" >
                <form @submit.prevent="submit" class="flex-1 basis-1/3 m-12">
                  <div class="flex-column border-4">
                    <label class="m-6">
                      <span class="text-gray-700"> Straat of Postcode </span>
                      <input id="postcode" name="postcode" v-model="form.postcode"
                        class="
                          mt-1
                          pl-4
                          block
                          h-10
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
                          pl-4
                          block
                          h-10
                          w-full
                          rounded-md
                          bg-gray-100
                          border-transparent
                          focus:border-gray-500 focus:bg-white focus:ring-0">
                    </label>
                  </div>
                  <div class="grid grid-cols-3 lg:gap-10">
                      <button class="btn-orange col-span-3 uppercase tracking-[.25em]" type="submit">Ververs</button>
                      <button @click="closeModal"> Cancel </button>
                      <Link :href="$route('home')">GO</Link>
                  </div>

                </form>

                <table class="flex-1 basis-2/3 m-4">
                  <thead class="text-left border-2">
                    <tr class="">
                      <th class="">Plaats</th>
                      <th class="">Straat</th>
                      <th class="">Huisnummer</th>
                      <th class="">Postcode</th>
                      <th class="text-center">Details</th>
                    </tr>
                  </thead>
                  <tbody class="border-2">
                      <tr v-for="(woningen, i) in jumbaData" :key="i" class="text-center border-2 p-10">
                        <td v-if="woningen['Filter']['City'] != ''"> {{ woningen['Filter']['City'] }} </td>
                        <td v-if="woningen['Filter']['City'] != ''"> {{ woningen['Filter']['Street'] }} </td>
                        <td v-if="woningen['Filter']['City'] != ''"> {{ woningen['Filter']['Number'] }} </td>
                        <td v-if="woningen['Filter']['City'] != ''"> {{ woningen['Filter']['Postcode'] }} </td>
                        <td v-if="woningen['Filter']['City'] != ''" class="text-center">
                          <a class="btn-blue" :href="'https://www.checkdiewoning.nl/woning/'+woningen['Filter']['City']+'/'+woningen['Filter']['Street']+'/'+woningen['Filter']['Number']">Details</a>
                        </td>
                      </tr>
                  </tbody>
                </table>
            </Modal>
              

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
