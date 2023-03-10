<script setup>
import defaultLayout from '@/Layouts/defaultLayout.vue';
import Navigation from '@/Components/ComponentNavigation.vue';
import Footer from '@/Components/ComponentFooter.vue';
import { reactive } from 'vue'
import { Head } from '@inertiajs/vue3';
import { router } from '@inertiajs/vue3';
import { Link } from '@inertiajs/vue3';
import { ref } from 'vue';

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

const form = reactive({
  input: null,
})

function selecteer(woning) {
  form.input = JSON.stringify(woning['Filter']['Postcode']) + JSON.stringify(woning['Filter']['Number']);
  router.post('/', form)
}

</script>


<template>
    <Head title="Woning overzicht" />

    <defaultLayout>

        <template #nav>
          <Navigation :Login=true />
        </template>
        
        <template #main>
          

          <div class="flex flex-row bg-[#F3F4F6]" >

            <!-- linkse spacing -->
            <div class="basis-1/8">
            </div>

            <!-- Centrale content HOME result-->
            <div class="basis-6/8">

              <!-- Content Home result MEERDERE OPTIES -->

              <div v-if="jumbaData.length >= 2" class="flex flex-row lg:p-12" >
                <div class="basis-1/1 bg--jumba-red">
                  <span class="bg--jumba-red ">
                    <h3 class="py-4 text-center">Beschikbare woningen </h3>
                    <p class="px-10">
                      Selecteer de woning van je keuze 
                    </p>
                  </span>
                  <table class="flex-1 basis-1/2 m-4">
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
                          
                          <button class="btn-blue visible" @click="selecteer(woningen)" >selecteer</button>

                        </td>
                      </tr>
                    </tbody>
                  </table>

                </div>

                <div class="basis-1/2 bg-white">
                  <h3 class="py-4 text-center">Selecteer</h3>
                  <p class="px-10">
                    Selecteer de woning van je keuze
                  </p>
                  <span class="grid justify-items-center mb-4">
                    <a href="/" class="btn-blue">
                      terug
                    </a>
                  </span>
                </div>
                
              </div>

              <!-- Content Home result EEN OPTIE -->

              <div v-if="jumbaData.length <= 1" class="flex flex-row lg:p-12" >
                <div class="flex-1 basis-1/3 bg--jumba-red p-10">
                  <h3 class="text-center">Jumba marktwaarde</h3>
                  <span class="bg--jumba-red">
                    <p class="text-center">
                      Voor <span class="font-bold"> {{ jumbaData[0]['Filter']['Street'] }}  {{ jumbaData[0]['Filter']['Number'] }} </span> heeeft Jumba 
                      een marktwaarde schatting gemaakt. Deze waarde range is bepaald aan de hand van verschillende factoren. 
                    </p><br/>
                    <p class="text-center">
                      De Jumba marktwaarde schatting is geen taxatie, maar moet gezien worden als een indicatie 
                      en als startpunt voor verdere waardebepalingen van de woning.
                    </p>
                    <h3 class="text-center my-8"> € {{ jumbaData[0]['Payload']['JumbaValue'][0] }} - € {{ jumbaData[0]['Payload']['JumbaValue'][1] }}</h3>
                  </span>
                </div>

                <div class="basis-2/3 bg-white p-10">
                  <h3 class="text-center">De volgende stap...</h3>
                  
                  <span class="">
                    <span class="flex flex-row align-content-center px-10 py-4 gap-4">
                      <h4>Taxatierapport nodig?</h4>
                      <a class="capital " href="sander@jumba.nl" >
                        aanvragen
                      </a>
                    </span>
                    <p class="">
                      Een taxatiewaarde is een officiële waardeschatting die is uitgevoerd door een erkende taxateur.
                      De taxateur gaat te werk aan een hand van een vastgelegde methode. 
                    </p>
                  </span>

                  <span class="">
                    <span class="flex flex-row align-content-center px-10 py-4 gap-4">
                      <h4>Taxatierapport nodig?</h4>
                      <a class="capital " href="sander@jumba.nl" >
                        aanvragen
                      </a>
                    </span>
                    <p class="">
                      Een taxatiewaarde is een officiële waardeschatting die is uitgevoerd door een erkende taxateur.
                      De taxateur gaat te werk aan een hand van een vastgelegde methode. 
                    </p>
                  </span>

                </div>
                
              </div>


                <!-- Content Home - WEL ingelogd -->
                <div v-if="Content != null" class="basis-1/2 bg--jumba-red">
                </div>

                <div v-if="Content != null" class="basis-1/2 bg-white">
                </div>
              

            </div>

            <!-- Rechtse spacing -->
            <div class="basis-1/8 bg-[#F3F4F6]"></div>
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
