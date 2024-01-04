<script setup>
import defaultLayout from '@/Layouts/defaultLayout.vue';
import Navigation from '@/Components/Algemeen/ComponentNavigation.vue';
import Footer from '@/Components/Algemeen/ComponentFooter.vue';
import { reactive, computed, watch } from 'vue'
import { Link } from '@inertiajs/vue3';
import { router } from '@inertiajs/vue3';

const form = reactive({
  trx: null,
  prijsHyp: null,
  prijsVerkoop: null,
})

function submit() {
  router.post('/', form)
}

// a computed result omzet
const huidigOmzet = computed(() => {
  return form.trx * form.prijsHyp
})

const potentieelOmzet = computed(() => {
  return (form.trx * 0.5 * (form.prijsVerkoop - 1300)) + huidigOmzet.value
})

const percentageVerschil = computed(() => {
  var verschilUnformatted = ((potentieelOmzet.value - huidigOmzet.value) / huidigOmzet.value) * 100;
  return verschilUnformatted.toFixed(2)    
})

function formatNr($nr) {
  return $nr.toLocaleString("nl-NL", {style:"currency", currency:"EUR"});
}

// Format output
// watch (
//   // WHAT TO WATCH
//   () => huidigOmzet,
//   // WHAT TO DO 
//     () => { 
//       if (huidigOmzet > 1000) {
//         form.trx = 2000
//       } 
//     }
// )

</script>


<template>
    <Head title="Bereken extra omzet" />

    <defaultLayout>

        <template #nav>
          <!-- NAV - NIET ingelogd -->
          <div v-if="!$attrs.auth.user" class="basis-1/2 bg--jumba-red">
            <Navigation :Login=false />
          </div>
          <!-- NAV - WEL ingelogd -->
          <div v-if="$attrs.auth.user" class="basis-1/2 bg--jumba-red">
            <Navigation :Login=true />
          </div>        
        </template>
        
        <template #main>
          

          <div class="bg-[#F3F4F6] grid grid-cols-12 my-10" >

                <!-- Content Home - WEL ingelogd -->
                <div class="col-span-12 md:col-start-2 md:col-span-5 bg--jumba-red py-10">
                    <h3 class="text-center">Kantoor details</h3>
                    <p class="px-10">
                      Deel enkele kantoordetails om te ontdekken hoe onze services 
                      helpen uw inkomsten te vergroten en uw klantrelaties te verdiepen. 
                    </p>
                  <form @submit.prevent="submit" class="p-4">
                    <div class="flex-column">
                        <label class="m-4 text-black">
                          <h4 class="text-white px-4">Aantal hypotheek transacties (per maand of jaar)</h4>
                          <input id="trx" name="trx" v-model="form.trx" type="number" placeholder="aantal adviezen"
                            class="
                              pl-4
                              place-content-center
                              block
                              w-full
                              h-14
                              rounded-md
                              bg-gray-100
                              border-transparent
                              focus:border-gray-500 focus:bg-white focus:ring-0"
                          >
                          <h4 class="text-white px-4 pt-4">Prijs voor hypotheek advies</h4>
                          <input id="prijsHyp" name="prijsHyp" v-model="form.prijsHyp" type="number" placeholder="prijs in euro’s"
                            class="
                              pl-4
                              place-content-center
                              block
                              w-full
                              h-14
                              rounded-md
                              bg-gray-100
                              border-transparent
                              focus:border-gray-500 focus:bg-white focus:ring-0"
                          >
                          <h4 class="text-white px-4 pt-4">Prijs verkoop dienstverlening (die u in rekening brengt bij klant)</h4>
                          <input id="prijsVerkoop" name="prijsVerkoop" v-model="form.prijsVerkoop" type="number" placeholder="prijs in euro’s"
                            class="
                              pl-4
                              place-content-center
                              block
                              w-full
                              h-14
                              rounded-md
                              bg-gray-100
                              border-transparent
                              focus:border-gray-500 focus:bg-white focus:ring-0"
                          >

                          <p v-if="Message" class="text-sm text-[#E94250]">{{ Message }}</p>
                        </label>
                    </div>

                  </form>
                </div>

                <div v-if="form.trx != null" class="col-span-12 md:col-start-7 md:col-span-5 bg-white py-10">
                  <h4 v-if="form.trx == null">Vul de informatie in om een beeld te krijgen van de mogelijkheden</h4>
                  <h4 v-if="form.trx != null && form.prijsHyp != null" class="text-center">Huidige omzet</h4>
                  <h1 v-if="form.trx != null && form.prijsHyp != null" class="text-center  mb-10">{{ formatNr(huidigOmzet) }}</h1>
                  <h4 v-if="form.prijsVerkoop != null && percentageVerschil > 0" class="text-center">Potentiele omzet</h4>
                  <h1 v-if="form.prijsVerkoop != null && percentageVerschil > 0" class="text-center mb-10">{{ formatNr(potentieelOmzet) }}</h1>
                  <h4 v-if="form.prijsVerkoop != null && percentageVerschil > 0" class="text-center">Extra potentiele omzet</h4>
                  <h1 v-if="form.prijsVerkoop != null && percentageVerschil > 0" class="text-center  mb-10 text-green-500">{{ percentageVerschil }} %</h1>

                  <Link v-if="form.prijsVerkoop != null && percentageVerschil > 0 && $attrs.auth.user"
                    :href="route('bereken')"
                    method="post" 
                    class="btn-blue text-center mx-20">
                    MEER INFORMATIE
                  </Link>

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
