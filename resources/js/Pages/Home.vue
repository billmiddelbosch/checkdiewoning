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

              <div class="flex flex-row lg:p-12" >

                <!-- Content Home - NIET ingelogd -->
                <div v-if="!$attrs.auth.user" class="basis-1/2 flex items-center bg--jumba-red py-10">
                  <span class=" ">
                    <h3 class="pt-4 text-center">WELKOM BIJ CHECKDIEWONING.NL </h3>
                    <p class="text-center">
                      <span class="text-bold ">Onderdeel van <a href="https://www.jumba.nl/" target="new" class="text-bold">Jumba.nl</a></span>
                    </p><br/>
                  </span>
                </div>

                <div v-if="!$attrs.auth.user" class="basis-1/2 flex items-center bg-white">
                  <span class="">

                    <!-- <h3 class="py-4 text-center">Woning waarde </h3> -->                    
                    <span class="flex items-center justify-center m-4">
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
                <div v-if="$attrs.auth.user" class="basis-1/2 bg--jumba-red py-12">
                  <span class="">
                    <h3 class="py-4 text-center">Welkom {{ $attrs.auth.user.name }}</h3>
                    <p class="px-10">
                      Als adviseur de regie houden over jouw lead. Daar helpen we je graag bij.
                    </p><br/>
                    <p class="px-10">
                      Vul hiernaast het adres of postcode/huisnummer in voor het adres waar je je klant mee wil helpen (aankoop of verkoop).
                    </p>
                  </span>
                </div>

                <div v-if="$attrs.auth.user" class="basis-1/2 bg-white">
                  <form @submit.prevent="submit" class="py-20 px-10">
                    <div class="flex-column border-2">
                        <label class="m-4 ">
                          <h4 class="text-gray-700 "> </h4>
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
