<script setup>
import defaultLayout from '@/Layouts/defaultLayout.vue';
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
          

          <div class="flex flex-row bg-[#F3F4F6]" >

            <!-- linkse spacing -->
            <div class="basis-1/6">
            </div>

            <!-- Centrale content -->
            <div class="basis-4/6">

              <!-- Content Home -->

              <div class="flex flex-row lg:p-12" >

                <!-- Content Home - NIET ingelogd -->
                <div v-if="!$attrs.auth.user" class="basis-1/2 flex items-center bg--jumba-red py-10">
                  <span class=" ">
                    <h3 class="pt-4 text-center">WELKOM</h3>
                    <p class="mx-10 text-center">
                      <span>
                        Welkom bij CHECKDIEWONING.NL. Dé plek voor financieel adviseurs. 
                        Hier vind je uitgebreide informatie en handige tools voor het kopen en verkopen van vastgoed.
                      </span>
                    </p>
                    <p class="m-10 text-center">
                        Onderdeel van 
                        <a href="https://www.isalu.nl/" target="new" class="text-bold">iSalu.nl</a>
                    </p>                  
                  </span>
                </div>

                <div v-if="!$attrs.auth.user" class="basis-1/2 flex items-center bg-white py-10">
                  <span class="">
                    <h3 class="pt-4 text-center">VOOR ADVISEURS</h3>
                    <p class="mx-10 text-center">
                      <span>
                        Ontdek vandaag nog de mogelijkheden. 
                        Help uw klant met waardevolle informatie en ontdek hoe je je omzet kan verhogen. 
                        Log in of registreer zonder verplichting. 
                      </span>
                    </p>
                    <!-- <h3 class="py-4 text-center">Woning waarde </h3> -->                    
                    <span class="flex textBmidde01asdfsdf-center justify-center m-4">
                      <a href="/login" class="btn-blue">
                        Login
                      </a>
                    </span>
                    <br/>
                    <p class="px-10">
                      Geen inloggegevens? Registreer je <a class="text-bold" href="/register">gratis</a>. 
                    </p><br/>
                    
                  </span>

                </div>


                <!-- Content Home - WEL ingelogd -->
                <div v-if="$attrs.auth.user" class="flex-column basis-1/2 bg--jumba-red py-10">
                  <h3 class="py-4 text-center">Extra inkomsten</h3>
                  <p class="px-10">
                    Ontdek hoeveel extra omzet u kunt genereren als financieel adviseur door verbreding van uw diensen met aan-/verkoop. 
                    Gebruik onze rekentool om direct je potentiële extra inkomsten te berekenen.
                  </p>
                  <Link
                    :href="route('bereken')"
                    class="btn-blue text-center m-20"
                    >BEREKEN</Link>
                </div>

                <div v-if="$attrs.auth.user" class="basis-1/2 bg-white py-10">
                  <h3 class="py-4 text-center">Woninginformatie</h3>
                    <div v-if="error.value" class="alert alert-danger">{{ error.value }}</div>
                    <p class="px-10">
                      Voer een postcode in en ontvang direct essentiële woninginformatie, inclusief onze waarde inschatting.
                    </p><br/>
                  <form @submit.prevent="submit" class="p-10">
                    <div class="flex-column border-2">
                        <label class="m-4">
                          <h4 class="text-gray-700 "> </h4>
                          <div type="" class="form-check"></div>
                          <input id="input" name="input" v-model="form.input" placeholder="Postcode Huisnummer"
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
