<script setup>
import defaultLayout from '@/Layouts/defaultLayout.vue';
import Navigation from '@/Components/Algemeen/ComponentNavigation.vue';
import Footer from '@/Components/Algemeen/ComponentFooter.vue';
import { reactive } from 'vue'
import { Head } from '@inertiajs/vue3';
import { router } from '@inertiajs/vue3';


defineProps({
  jumbaData: {
      type: Object,
      default: null
  	},
    Content: {
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

function submit() {
  router.post('/', form)
}

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

              <div v-if="jumbaData == NULL" class="flex flex-row lg:p-12" >

                {{ Message }}

                <!-- Content Home - NIET ingelogd -->
                <div v-if="!$attrs.auth.user" class="basis-1/2 bg--jumba-red">
                  <span class="bg--jumba-red ">
                    <h3 class="py-4 text-center">Welkom bij Checkdiewoning.nl </h3>
                    <p class="px-10">
                      Check die wonging is onderdeel van <a href="www.jumba.nl" class="text-black">Jumba</a>. 
                      Via checkdiewoning.nl krijg je toegang tot onze Jumba services en neem ook jij 
                      de regie in het Woon domein. 
                    </p>
                    <p class="px-10">
                      Heb je een woning op het oog om te kopen? Of wil je weten welke waarde wij hebben berekent voor jouw 
                      eigen woning?
                    </p><br/>
                    <h4 class="pt-10 text-center">
                      Wij helpen je met onze gratis woningwaarde check.
                    </h4>
                  </span>
                </div>

                <div v-if="!$attrs.auth.user" class="basis-1/2 bg-white">
                  <h3 class="py-4 text-center">Woningwaarde </h3>
                  <p class="px-10">
                    Heeft je klant een woning op het oog en wil hij weten wat die woning kost? Help hem met zijn zoektocht.
                  </p><br/>
                  <p class="px-10">
                    Heb je een woning op het oog en wil je weten wat die woning kost, dan kun je hier inloggen en we helpen je graag verder.
                  </p>
                  <p class="px-10">
                    Bij de aanmelding heb je inlogggevens ontvangen. Heb je je nog niet aangemeld of geen inlogggevens ontvangen, 
                    stuur dan een bericht aan <a href="sander@jumba.nl">Sander</a>. 
                  </p><br/>

                  <span class="grid justify-items-center mb-4">
                    <a href="/login" class="btn-blue">
                      Login
                    </a>
                  </span>

                </div>


                <!-- Content Home - WEL ingelogd -->
                <div v-if="$attrs.auth.user" class="basis-1/2 bg--jumba-red">
                  <span class="">
                    <h3 class="py-4 text-center">Welkom {{ Content['adviseurNaam'] }} </h3>
                    <p class="px-10">
                      Als adviseur de regie houden over jouw lead. Daar helpen we je graag bij. 
                    </p>
                    <p class="px-10">
                      Via de Jumba services neem jij ook de regie in het Woon domein. 
                      Help je klant van financiele orientatie naar aankoop, verkoop tot aan de notaris.
                    </p>
                  </span>
                </div>

                <div v-if="$attrs.auth.user" class="basis-1/2 bg-white">
                  <p class="p-10">
                    Heeft je klant een woning op het oog en wil hij weten wat die woning kost? Help hem met zijn zoektocht.
                  </p>
                  <p class="px-10">
                    Heb je een woning op het oog en wil je weten wat die woning kost? We helpen je graag.
                  </p><br/>
                  <form @submit.prevent="submit" class="p-10">
                    <div class="flex-column border-2">
                        <label class="m-6 ">
                          <h4 class="text-gray-700 "> Postcode en huisnummer </h4>
                          <input id="input" name="input" v-model="form.input"
                            class="
                              pl-12
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
                        <div class="grid justify-items-center m-4">
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
