<script setup>
import defaultLayout from '@/Layouts/defaultLayout.vue';
import Navigation from '@/Components/ComponentNavigation.vue';
import Footer from '@/Components/ComponentFooter.vue';
import { Head } from '@inertiajs/vue3';
</script>


<template>
    <Head title="Home" />

    <defaultLayout>

        <template #nav>
          <Navigation :Login=false />
        </template>

        <template #main>
          <div class="py-12" >
              <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                  <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                      <div class="main">

                        <div class="flex-column flex-grid--full">

                          <div id="verkopen" class="wrapper">
                            <div class="text-center wrapper">
                              <h2>Check je nieuwe (t)huis?</h2>
                              <h3 class="text-tertiary">Alles voor je aankoop op een plek</h3>
                            </div>
                            <div class="text-center">
                              <!-- <Link :href="route('zoekAanbod-index')">ZOEK</Link> -->
                              <a class="btn btn-orange" href="adviseur">Login</a>
                            </div>
                          </div>

                          <!-- <div class="wrapper bg--grey">
                            <div class="col">
                              <h3>wijkopenautos.nl de simpelste manier om je auto te verkopen</h3>
                            </div>
                            <div class="col">
                              <h3>wijkopenautos.nl de simpelste manier om je auto te verkopen</h3>
                            </div>

                          </div> -->

                          <!-- <div id="kopen" class="wrapper">
                            <div class="text-center wrapper">
                              <h2 class="text-center">Je huis met iSalu kopen</h2>
                              <h3 class="text-tertiary">Jouw droomhuis - onze kennis - gekocht!</h3>
                            </div>
                            <div class="text-center">
                            </div>
                          </div> -->

                        </div>

                      </div>
                  </div>
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
