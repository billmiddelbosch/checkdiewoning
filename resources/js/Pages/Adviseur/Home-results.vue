<script setup>
import defaultLayout from '@/Layouts/defaultLayout.vue';
import Navigation from '@/Components/Algemeen/ComponentNavigation.vue';
import Footer from '@/Components/Algemeen/ComponentFooter.vue';
import { reactive } from 'vue'
import { Head } from '@inertiajs/vue3';
import { router } from '@inertiajs/vue3';
import { ref } from 'vue';

// Components
import TopAdress from '@/Components/Algemeen/TopAdress.vue';

defineProps({
  jumbaData: {
      type: Object,
      default: null
  	},
  cmsProducts: {
      type: Object,
      default: null
  	}
});

const selectie = ref(2)
const items= ['Kopen','Verkopen', 'Overig']


// Menu selectie afhandeling
function select(index) {
    form.selected = null;
    selectie.value = index
}

// Klant gegevens opslaan
const form = reactive({
  naam: null,
  email: null,
  selected: null,
})

function submit() {
  router.post('/home-results', form)
}

</script>


<template>
    <Head title="Woning overzicht" />

    <defaultLayout>

        <template #nav>
          <Navigation :Login=true />
        </template>
        
        <template #main>
                      
          <TopAdress :gelditTot=jumbaData.Items[0].Payload.Properties.Energylabel.ValidUntil />

          <div class="flex flex-row bg-[#F3F4F6]" >

            <!-- linkse spacing -->
            <div class="basis-1/6">
            </div>

            <!-- Centrale content HOME result-->
            <div class="basis-5/6">

              <div class="flex flex-row lg:p-8" >

                <div class="grow bg-white">
                    <span class="col-start-2 col-span-6 space-x-12"> 
                        <button @click="select(index)" v-for="(item, index) in items" :key="index" 
                        class="lg:w-48 m-1 p-4 focus:bg-[#E74650] focus:text-white rounded-md"> 
                            {{ item }} 
                        </button>
                    </span>

                    <!-- Startmenu - 99 -->
                    <div v-if="selectie == 99" class="flex flex-column basis-3/5 border-t-4">
                      <div class="flex-1 basis-2/5 p-10">
                        <span class="my-8">
                          <span class="flex flex-row gap-4">
                            <p class="self-center"> Heeft je klant interesse in deze woning of is het zijn huidige woning? </p>
                          </span>
                        </span>
                      </div>
                    </div>

                    <!-- Op subpagina 0 of 1 -->
                    <div v-if="selectie >= 0" class="flex flex-column basis-3/5 border-t-4">
                      <form @submit.prevent="submit">

                        <!-- menu 0 - KOPEN -->
                        <div v-if="selectie == 0" class="flex flex-column basis-3/5 border-t-4 p-12">
                          <h3>Aankoop hulp</h3>
                          <table class="mt-30">
                            <thead class="text-left h-10 font-bold border-b border-slate-200">
                              <tr class="">
                                <th class="flex-none w-24">Selecteer</th>
                                <th class="flex-none w-30">Naam</th>
                                <th class="grow">Omschrijving</th>
                                <th class="flex-none w-40">Prijs</th>
                              </tr>
                            </thead>
                            <tbody v-for="(product, i) in cmsProducts['stories']" :key="i" class="">
                              <tr v-if="product.content.type == 'aankoop'" class="flex-cols-4 h-16 space-x-4 even:bg-slate-100">                                       
                                <span v-if="product.content.type == 'aankoop'" class="grid place-items-center self-center h-16">
                                  <input type="radio" id="selected" name="selected" v-model="form.selected" :value="product['content']['naam']"
                                    class=" ">
                                </span>
                                <td v-if="product.content.type == 'aankoop'" class=" ">{{ product['content']['naam'] }}</td>
                                <td v-if="product.content.type == 'aankoop'" class="">{{ product['content']['beschrijving'] }}</td>
                                <td v-if="product.content.type == 'aankoop'" class="">€ {{ product['content']['prijs'] }}</td>
                              </tr>
                            </tbody>
                          </table>

                        </div>

                        <!-- menu 1 - VERKOPEN -->
                        <div v-if="selectie == 1" class="flex flex-column basis-3/5 border-t-4 p-12">
                          <h3>Verkoop hulp</h3>
                          <table class="mt-30">
                            <thead class="text-left h-10 font-bold border-b border-slate-200">
                              <tr class="">
                                <th class="flex-none w-24">Selecteer</th>
                                <th class="hidden">Naam</th>
                                <th class="grow">Omschrijving</th>
                                <th class="flex-none w-40">Prijs</th>
                              </tr>
                            </thead>
                            <tbody v-for="(product, i) in cmsProducts['stories']" :key="i" class="">
                              <tr  v-if="product.content.type == 'verkoop'" class="flex-cols-4 h-16 space-x-4 even:bg-slate-100">
                                <span v-if="product.content.type == 'verkoop'" class="grid place-items-center self-center h-16">
                                  <input type="radio" id="selected" name="selected" v-model="form.selected" :value="product['content']['naam']"
                                    class=" ">
                                </span>
                                <td v-if="product.content.type == 'verkoop'" class="hidden">{{ product['content']['naam'] }}</td>
                                <td v-if="product.content.type == 'verkoop'" class="">{{ product['content']['beschrijving'] }}</td>
                                <td v-if="product.content.type == 'verkoop'" class="">€ {{ product['content']['prijs'] }}</td>
                              </tr>
                            </tbody>
                          </table>

                        </div>

                        <!-- menu 2 - Overig -->
                        <div v-if="selectie == 2" class="flex flex-column basis-3/5 border-t-4 p-12">
                          <h3>Overige diensten</h3>
                          <table class="mt-30">
                            <thead class="text-left h-10 font-bold border-b border-slate-200">
                              <tr class="">
                                <th class="flex-none w-24">Selecteer</th>
                                <th class="flex-none w-30">Naam</th>
                                <th class="grow">Omschrijving</th>
                                <th class="flex-none w-40">Prijs</th>
                              </tr>
                            </thead>
                            <tbody v-for="(product, i) in cmsProducts['stories']" :key="i" class="">
                              <tr v-if="product.content.type == 'overig'" class="flex-cols-4 h-16 space-x-4 even:bg-slate-100">                                       
                                <span v-if="product.content.type == 'overig'" class="grid place-items-center self-center h-16">
                                  <input type="radio" id="selected" name="selected" v-model="form.selected" :value="product['content']['naam']"
                                    class=" ">
                                </span>
                                <td v-if="product.content.type == 'overig'" class=" ">{{ product['content']['naam'] }}</td>
                                <td v-if="product.content.type == 'overig'" class="">{{ product['content']['beschrijving'] }}</td>
                                <td v-if="product.content.type == 'overig'" class="">€ {{ product['content']['prijs'] }}</td>
                              </tr>
                            </tbody>
                          </table>

                        </div>


                        <span  v-for="(product, i) in cmsProducts['stories']" :key="i">
                          <div v-if="product.content.naam == form.selected && !product.content.leadout" class="flex-column">
                              <label class="m-6">
                                <h4 class="text-[#E64750] ">Bestel dit product voor je klant </h4>
                                <span class="flex flex-cols-6 gap-12">
                                    <input id="naam" name="naam" v-model="form.naam" placeholder="Naam"
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
                                    <input id="email" name="email" v-model="form.email" placeholder="Email adres"
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
                                        <button class="btn-blue" type="submit">Bestel</button>
                                    </div>
                                  </span>
                              </label>
                            </div>
                            <div v-if="product.content.naam == form.selected && product.content.leadout" class="flex-column" >
                              <div class="flex flex-row justify-center items-center gap-8 p-8" >
                                <h4 class="text-[#E64750] ">Schrijf in voor je klant </h4>
                                <a class="btn btn-blue" :href=product.content.leadoutUrl.cached_url :target=product.content.leadoutUrl.target >
                                  Inschrijven
                                </a>
                              </div>
                            </div>
                          </span>
                      </form>
                    </div>


                    <!-- Op elke subpagina -->
                    <div class="flex flex-column basis-3/5 border-t-4">
                      <a class="btn button-primary " href="/" >
                        terug
                      </a>
                    </div>

                </div>

              </div>              

            </div>

            <!-- Rechtse spacing -->
            <div class="basis-1/6 bg-[#F3F4F6]"></div>
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
