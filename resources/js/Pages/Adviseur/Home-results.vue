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
import Section from '@/Components/Algemeen/Section.vue';
import Foldout from '@/Components/Algemeen/Foldout.vue';

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
const show = ref(Boolean)

// Menu selectie afhandeling
function select(index) {
    form.selected = null;
    selectie.value = index
}

function handleSelect ($product) {
  show.value = false;
  form.naam = $product
}

function setUpperCase($set) {
    // WIP - ADD dubbele hoofdletter na '-'
    // // $dash = $set.indexOf("-")
    // if(!dash) {

    // } else {
        return $set.charAt(0).toUpperCase() + $set.slice(1) + '  '; 
    // }
}


</script>


<template>
    <Head title="Woning overzicht" />

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
          
          <TopAdress />

          <!-- Centrale content HOME result-->

          <div class="grid grid-cols-12 gap-4 m-4">
            <Foldout class="col-span-12 md:col-span-6" header="Algemeen" :propShow=true>
              <div class="grid grid-cols-12 px-4 py-1">
                <p class="col-span-4"><strong>Type woning</strong></p>
                <p class="col-span-8">{{ setUpperCase($page.props.jumbaData['Items'][0]['Payload']['Type']) }}</p>
              </div>
              <div class="grid grid-cols-12 px-4 py-1">
                <p class="col-span-4"><strong>Bouwjaar</strong></p>
                <p class="col-span-8">{{ $page.props.jumbaData['Items'][0]['Payload']['Built'] }}</p>
              </div>
            </Foldout>
            <Foldout class="col-span-12 md:col-span-6" header="Adresgegevens" :propShow=true>
              <div v-if="$page.props.jumbaData['Items'][0]['Filter']['Province']" class="grid grid-cols-12 px-4 py-1">
                <p class="col-span-4"><strong>Provincie</strong></p>
                <p class="col-span-8">{{ setUpperCase($page.props.jumbaData['Items'][0]['Filter']['Province']) }}</p>
              </div>
              <div v-if="$page.props.jumbaData['Items'][0]['Filter']['County']" class="grid grid-cols-12 px-4 py-1" >
                <p class="col-span-4"><strong>Gemeente</strong></p>
                <p class="col-span-8">{{ setUpperCase($page.props.jumbaData['Items'][0]['Filter']['County']) }}</p>
              </div>
              <div v-if="$page.props.jumbaData['Items'][0]['Filter']['City']" class="grid grid-cols-12 px-4 py-1">
                <p class="col-span-4"><strong>Stad</strong></p>
                <p class="col-span-8">{{ setUpperCase($page.props.jumbaData['Items'][0]['Filter']['City']) }}</p>
              </div>
              <div v-if="$page.props.jumbaData['Items'][0]['Filter']['Street']" class="grid grid-cols-12 px-4 py-1">
                <p class="col-span-4"><strong>Straat</strong></p>
                <p class="col-span-8">{{ setUpperCase($page.props.jumbaData['Items'][0]['Filter']['Street']) }}</p>
              </div>
              <div v-if="$page.props.jumbaData['Items'][0]['Filter']['Number']" class="grid grid-cols-12 px-4 py-1">
                <p class="col-span-4"><strong>Nummer</strong></p>
                <p class="col-span-8">{{ setUpperCase($page.props.jumbaData['Items'][0]['Filter']['Number']) }}</p>
              </div>
            </Foldout>
            <Foldout class="col-span-12 md:col-span-6" header="Buitenruimte" :propShow=true>
              <div v-if="$page.props.jumbaData['Items'][0]['Payload']['Garage']" class="grid grid-cols-12 px-4 py-1">
                <p class="col-span-4"><strong>Garage</strong></p>
                <p class="col-span-8">{{ setUpperCase($page.props.jumbaData['Items'][0]['Payload']['Garage']) }}</p>
              </div>
              <div v-if="$page.props.jumbaData['Items'][0]['Payload']['Garden']" class="grid grid-cols-12 px-4 py-1">
                <p class="col-span-4"><strong>Tuin</strong></p>
                <p class="col-span-8">{{ setUpperCase($page.props.jumbaData['Items'][0]['Payload']['Garden']) }}</p>
              </div>
            </Foldout>

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

.v-enter-active,
.v-leave-active {
transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
opacity: 0;
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
