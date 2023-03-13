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
    Content: {
      type: Object,
      default: null
  	}
});

const woningDetails = ref([])
const selectie = ref(99)
const items= ['Kopen','Verkopen','Woning gegevens']


// Menu selectie afhandeling
function select(index) {
    selectie.value = index
}

function selecteer(woning) {
  form.input = JSON.stringify(woning['Filter']['Postcode']) + JSON.stringify(woning['Filter']['Number']);
  router.post('/', form)
}

// Klant gegevens opslaan
const form = reactive({
  email: null,
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
                      
          <TopAdress />

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

                    <!-- Op subpagina 1 of 2 -->
                    <div v-if="selectie == 0 | selectie == 1" class="flex flex-column basis-3/5 border-t-4">
                      <form @submit.prevent="submit">
                        <div class="flex-column">
                            <label class="m-6 ">
                              <h4 class="text-gray-700 "> Email adres van je klant </h4>
                              <input id="email" name="email" v-model="form.email"
                                class="
                                  pl-12
                                  place-content-center
                                  block
                                  w-full
                                  h-12
                                  rounded-md
                                  bg-gray-100
                                  border-transparent
                                  focus:border-gray-500 focus:bg-white focus:ring-0"
                              >
                            </label>
                            <!-- <div class="grid justify-items-center m-4">
                                <button class="btn-orange uppercase tracking-[.25em]" type="submit">Zoek</button>
                            </div> -->
                        </div>
                      </form>
                    </div>

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


                    <!-- menu 0 -->
                    <div v-if="selectie == 0" class="flex flex-column basis-3/5 border-t-4">
                      <div class="flex-1 basis-2/5 p-10">
                        <span class="my-8">
                          <span class="flex flex-row gap-4">
                            <img src="https://jumba-assets.s3.eu-west-1.amazonaws.com/Jumba-icon-klein.png" alt="Jumba-Logo" width="40">
                            <p class="self-center"> Een taxatie is een officiële waardeschatting, uitgevoerd door een erkende taxateur. </p>
                          </span>
                          <span class="flex flex-row lg:align-content-center lg:px-14 py-1 lg:gap-4">
                            <h4>Taxatierapport nodig?</h4>
                            <a class="uppercase underline underline-offset-4" href="sander@jumba.nl" >
                              aanvragen
                            </a>
                          </span>
                        </span>

                        <span class="my-8">
                          <span class="flex flex-row gap-4">
                            <img src="https://jumba-assets.s3.eu-west-1.amazonaws.com/Jumba-icon-klein.png" alt="Jumba-Logo" width="40">
                            <p class="self-center"> Een aankoop rapport is een zeer zinvolle hulp als voorbereiding op een bod. </p>
                          </span>
                          <span class="flex flex-row lg:align-content-center lg:px-14 py-1 lg:gap-4">
                            <h4>Aankoop rapport gewenst?</h4>
                            <a class="uppercase underline underline-offset-4" href="sander@jumba.nl" >
                              aanvragen
                            </a>
                          </span>
                        </span>
                      </div>
                    </div>

                    <!-- menu 1 -->
                    <div v-if="selectie == 1" class="flex flex-column basis-3/5 border-t-4">
                      <div class="flex-1 basis-2/5 p-10">
                        <span class="my-8">
                          <span class="flex flex-row gap-4">
                            <img src="https://jumba-assets.s3.eu-west-1.amazonaws.com/Jumba-icon-klein.png" alt="Jumba-Logo" width="40">
                            <p class="self-center">Samen met je klant deze woning professioneel verkopen. Dat kan!  </p>
                          </span>
                          <span class="flex flex-row lg:align-content-center lg:px-14 py-1 lg:gap-6">
                            <h4>Deze woning verkopen ?</h4>
                            <a class="uppercase underline underline-offset-4" href="sander@jumba.nl" >
                              inschrijven
                            </a>
                            <a class="uppercase underline underline-offset-4" @click="selectie=1" >
                              Bereken je besparing
                            </a>
                          </span>
                        </span>

                        <span class="my-8">
                          <span class="flex flex-row gap-4">
                            <img src="https://jumba-assets.s3.eu-west-1.amazonaws.com/Jumba-icon-klein.png" alt="Jumba-Logo" width="40">
                            <p class="self-center"> Op Jumba 100% gratis de markt aftasten. Dat kan!. </p>
                          </span>
                          <span class="flex flex-row lg:align-content-center lg:px-14 py-1 lg:gap-4">
                            <h4>Deze woning claimen op Jumba?</h4>
                            <a class="uppercase underline underline-offset-4" :href="'https://jumba.nl/registratie?e-mailadresadviseur=' + 'test' + 'Midd'" >
                              claim
                            </a>
                          </span>
                        </span>
                      </div>
            
                    </div>

                    <!-- menu 2  -->
                    <div v-if="selectie == 2" class="flex flex-column basis-3/5 border-t-4">
                      <div class="flex-1 basis-2/5 p-10">
                        <h3 class="">Jumba informatie  {{ jumbaData['Items'][0]['Filter']['Street'] }}  {{ jumbaData['Items'][0]['Filter']['Number'] }}</h3>
                        <span class="">
                          <p class="">
                            Deze Jumba marktwaarde schatting is geen taxatie, maar moet gezien worden als een indicatie 
                            en als startpunt voor verdere waardebepalingen van de woning.
                          </p>
                          <h3 class=" my-8"> € {{ jumbaData['Items'][0]['Payload']['JumbaValue'][0] }} - € {{ jumbaData['Items'][0]['Payload']['JumbaValue'][1] }}</h3>
                          <p class="">
                            Voor <span class="font-bold"> {{ jumbaData['Items'][0]['Filter']['Street'] }}  {{ jumbaData['Items'][0]['Filter']['Number'] }} </span> 
                            is het volgende energielabel vastgelegd. 
                          </p>
                          <h3 class="my-8"> Energielabel {{ jumbaData['Items'][0]['Payload']['Properties']['Energylabel']['LabelClass'] }} </h3>
                          <p>Geldig tot {{ jumbaData['Items'][0]['Payload']['Properties']['Energylabel']['ValidUntil'] }}
                          </p>
                        </span>
                      </div>                    
                    </div>

                    <!-- Op elke subpagina -->
                    <div class="flex flex-column basis-3/5 border-t-4">
                      <a class="btn button-primary " href="/" >
                        terug
                      </a>
                    </div>

                </div>

              </div>


                <!-- Content Home - WEL ingelogd -->
                <div v-if="Content != null" class="basis-1/2 bg--jumba-red">
                </div>

                <div v-if="Content != null" class="basis-1/2 bg-white">
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
