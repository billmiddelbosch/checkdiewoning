<script setup>
import defaultLayout from '@/Layouts/defaultLayout.vue';
import card from '../Components/Card.vue';
import Navigation from '@/Components/Algemeen/ComponentNavigation.vue';
import Footer from '@/Components/Algemeen/ComponentFooter.vue';
import { reactive, watch } from 'vue'
import { Head, Link } from '@inertiajs/vue3';
import { router } from '@inertiajs/vue3';


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
  input: null,
})

const error = reactive({
  error: '',
})


function submit() {
  if (form.input) {
    router.post('/', form)    
  } else {
    error.value = "Je moet wat invullen!!"
  }
}

watch (
  // WHAT TO WATCH
  () => form.input, 
  // WHAT TO DO 
    () => { 
      if (form.input == 'a') {
        error.value = form.input 
      } 
    }
)

</script>


<template>
    <Head title="Check Woning" />

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
          
        <div class="grid grid-cols-12">

            <card
              v-if="!$attrs.auth.user"
              class="col-span-12 md:col-span-12 2xl:col-span-4"
              title="Welkom"
              addText="Welkom bij CHECKDIEWONING.NL. Dé plek voor financieel adviseurs. Hier vind je uitgebreide informatie en handige tools voor het kopen en verkopen van vastgoed"
            >
              <p class="my-4">
                  Onderdeel van 
                  <a href="https://www.isalu.nl/" target="new" class="text-bold">iSalu.nl</a>
              </p>
            </card>

            <card 
              v-if="!$attrs.auth.user"
              class="col-span-12 md:col-span-4 2xl:col-span-4"
              title="Voor adviseurs"
              addText=" Ontdek vandaag nog de mogelijkheden. 
                        Help uw klant met waardevolle informatie en ontdek hoe je je omzet kan verhogen. 
                        Log in of registreer zonder verplichting."
            >
              <span class="flex justify-center m-4">
                <a href="/login" class="btn-blue">
                  Login
                </a>
              </span>
            </card>

            <card 
              v-if="$attrs.auth.user"
              class="col-span-12 md:col-span-4 2xl:col-span-4"
              title="Extra inkomsten"
              addText="Ontdek hoeveel extra omzet u kunt genereren als financieel adviseur door verbreding van uw diensen met aan-/verkoop. 
                    Gebruik onze rekentool om direct je potentiële extra inkomsten te berekenen."
            >
              <span class="flex justify-center m-4">
                <Link
                  :href="route('bereken')"
                  class="btn-blue"
                  >BEREKEN
                </Link>
              </span>
            </card>

            <card 
              v-if="$attrs.auth.user"
              class="col-span-12 md:col-span-4 2xl:col-span-4"
              title="Woninginformatie"
              addText="Voer een postcode in en ontvang direct essentiële woninginformatie, inclusief onze waarde inschatting."
            >
              <span class="flex justify-center m-4">
                <form @submit.prevent="submit">
                    <div class="border-2">
                        <label>
                          <input id="input" name="input" v-model="form.input" placeholder=""
                            class="
                              pl-4
                              place-content-center
                              block
                              w-full
                              h-16
                              rounded-md
                              bg-gray-100
                              border-transparent
                              focus:border-gray-500 focus:bg-white focus:ring-0"
                          >
                          <p v-if="Message" class="text-sm text-[#E94250]">{{ Message }}</p>
                        </label>
                        <div class="grid justify-items-center m-2">
                            <button class="btn-orange uppercase tracking-[.25em]" type="submit">Zoek</button>
                        </div>
                    </div>
                  </form> 
              </span>
            </card>


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
