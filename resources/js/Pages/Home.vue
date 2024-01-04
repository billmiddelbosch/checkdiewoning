<script setup>
import defaultLayout from '@/Layouts/defaultLayout.vue';
import Navigation from '@/Components/Algemeen/ComponentNavigation.vue';
import Footer from '@/Components/Algemeen/ComponentFooter.vue';
import { reactive } from 'vue';
import { router, Head } from '@inertiajs/vue3';
import Card from '../Components/Card.vue';

defineProps({
  jumbaData: {
      type: Object,
      default: null
  	},
    Message: {
      type: String,
      default: null,
      optional: true
  	}
});

const form = reactive({
  postcode: null,
  huisnummer: null,
})

const error = reactive({
  error: '',
})

function submit() {
  if (form.postcode && form.huisnummer) {
    if (form.postcode.length != 6) {
        error.value = "Graag een postcode van 6 karakters invullen"
      }  else {
        router.post('/', form)
      }  
  } else {
    error.value = "Graag zowel postcode als huisnummer invullen"
  }
}

function handleCTA($CTA) {
  router.get($CTA);
}

// watch (
//   // WHAT TO WATCH
//   () => form.postcode,
//   // WHAT TO DO 
//     () => { 
//       if (form.postcode != 6) {
//         error.value = "Graag een postcode van 6 karakters invullen"
//       } 
//     }
// )

</script>


<template>
    <Head title="Check Woning" />

    <defaultLayout>

        <template #nav>
          <!-- NAV - NIET ingelogd -->
          <div v-if="!$attrs.auth.user" class="bg--jumba-red">
            <Navigation :Login=false />
          </div>
          <!-- NAV - WEL ingelogd -->
          <div v-if="$attrs.auth.user" class="bg--jumba-red">
            <Navigation :Login=true />
          </div>        
        </template>
        
        <template #main>
          
          <div class="grid grid-rows-2 grid-flow-col">
            <div class="bg-[url('@/../../resources/assets/bg-home.jpg')] bg-no-repeat bg-cover bg-center col-span-12 text-white grid grid-col align-around">
              <div class="grid grid-cols-12 p-8">
                <h2 class="col-span-12 md:hidden text-center m-4 md:m-12">Innoveer</h2>    
                <h2 class="hidden md:block md:col-span-12 text-center m-4 md:m-12 ">Innoveer in het woondomein</h2>
                <h4 class="col-span-12 text-center text-bold px-4 md:p-2">Vergroot jouw impact en vergroot je winst</h4>

                <div class="col-start-1 col-span-12 m-8 md:col-start-3 md:col-span-8 xl:col-start-4 xl:col-span-6 border bg--white rounded-lg mb-12">
                  <div v-if="error.value || Message" class="bg-gradient-to-r from-red-800 to-red-900 text-white flex align-center m-2">{{ error.value }} {{ Message }}</div>
                  <p class="text-center p-4">
                    Waarde Check
                  </p>
                  <form @submit.prevent="submit" class="grid grid-cols-3 gap-2 px-4 pb-4">
                      <input id="postcode" name="postcode" v-model="form.postcode" placeholder="Postcode"
                        class="
                          pl-4
                          block
                          w-full
                          h-16
                          rounded-md
                          bg-gray-100
                          border-transparent
                          focus:border-gray-500 focus:bg-white focus:ring-0"
                      >
                      <input id="huisnummer" name="huisnummer" v-model="form.huisnummer" placeholder="Huisnummer"
                        class="
                          pl-4
                          block
                          w-full
                          h-16
                          rounded-md
                          bg-gray-100
                          border-transparent
                          focus:border-gray-500 focus:bg-white focus:ring-0"
                      >
                      <div class="flex justify-items-center m-2">
                          <button class="btn-orange tracking-[.25em]" type="submit">Zoek</button>
                      </div>

                  </form>
                  <p class="text-right p-4">
                    onderdeel van 
                    <a href="https://www.isalu.nl/" target="new" class="text-blue text-bold underline">iSalu.nl</a>
                  </p>                  
                </div>
              </div>
            </div>

            <div class="bg-white col-span-12 p-12 grid-cols-12 grid grid-cols-12 gap-10 align-center">
              <!-- Altijd getoond -->
              <Card
                class="col-span-12 md:col-span-4"
                title="Welkom bij iSalu"
                addText="Ontdek de toekomst van financieel advies. 
                  Vergroot moeiteloos jouw diensten aanbod in het woondomein."
              >
              </Card>
              <Card
                class="col-span-12 md:col-span-4"
                @click= "handleCTA('/bereken')"
                title="Wat kan het opleveren?"
                addText="Bereken wat innoveren in het woondomein jou kan opleveren."
              >
              </Card>

              <!-- NIET INGELOGD -->
              <Card 
                v-if="!$attrs.auth.user"
                @click= "handleCTA('/register')"
                class="col-span-12 md:col-span-4"
                title="Inschrijven?"
                addText="Met iSALU opent de deur naar nieuwe mogelijkheden in het Woon domein."
              >
              </Card>

              <!-- INGELOGD -->
              <Card 
                v-if="$attrs.auth.user"
                class="col-span-12 md:col-span-4"
                title="Woning verkopen?"
                addText="Zoek de woning en kies voor woning verkopen."
              >
              </Card>
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
