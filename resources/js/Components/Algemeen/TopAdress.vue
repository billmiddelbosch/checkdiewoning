<script setup>
import { defineProps, ref, reactive, onMounted } from "vue";
import Modal from "../Modal.vue";
import { router } from '@inertiajs/vue3';


const props = defineProps({
  gelditTot: String,
});

var openModal = ref(0);
var carrouselId = ref(0);

function changeModal($nr) {
    if (openModal.value) {
        openModal.value = $nr;
    } else {
        openModal.value = $nr;
    }
    return openModal;
};

const closeModal = () => {
    openModal.value = 0;
};

function setUpperCase($set) {
    // WIP - ADD dubbele hoofdletter na '-'
    // // $dash = $set.indexOf("-")
    // if(!dash) {

    // } else {
        return $set.charAt(0).toUpperCase() + $set.slice(1) + '  '; 
    // }
}

// Klant gegevens opslaan
const form = reactive({
  naam: null,
  email: null,
  selected: null,
})

function bestel($selected) {
    form.selected = $selected;
    router.post('/home-results', form);
    openModal.value = 0
}

function changeCarrousel($actie) {
    if ($actie == 1) {
        if (carrouselId.value == 2) {
            carrouselId.value = 0;
        } else {
            carrouselId.value++;
        }
    } else {
        if (carrouselId.value == 0) {
            carrouselId.value = 2;
        } else {
            carrouselId.value--;
        }
    }
};

</script>

<template>
    
    <div class="grid grid-rows-12">
        <!-- HEADER -->
        <!-- <div class="hidden col-span-12 md:grid md:grid-cols-12 md:col-start-2"> 
            <h3 class="md:col-span-2"> {{ setUpperCase($page.props.jumbaData['Items'][0]['Filter']['County']) }} |</h3>
            <h3 class="md:col-span-2"> {{ setUpperCase($page.props.jumbaData['Items'][0]['Filter']['Province']) }} | </h3>
            <h3 class="md:col-span-2"> {{ setUpperCase($page.props.jumbaData['Items'][0]['Filter']['City']) }} | </h3>
            <h3 class="">  {{ setUpperCase($page.props.jumbaData['Items'][0]['Filter']['Street']) }} </h3> 
            <h3 class="md:col-span-1"> {{ $page.props.jumbaData['Items'][0]['Filter']['Number'] }} </h3>
        </div> -->
        <p class="col-start-1 h-60 bg-sky-600 text-white flex align-center" @click="changeCarrousel(0)">&#9001;</p>
        <div v-if="carrouselId==0" class="col-start-2 col-span-10 p-4 flex flex-col justify-center h-60 bg-sky-600 text-white">
            <p class="flex align-center m-2 text-2xl inline">Energie label - {{ $page.props.jumbaData['Items'][0]['Payload']['Properties']['Energylabel']['LabelClass'] }}</p>
            <p class="flex align-center m-2">Status: {{ $page.props.jumbaData['Items'][0]['Payload']['Properties']['Energylabel']['LabelType'] }}</p>
        </div>
        <div v-if="carrouselId==1" class="col-start-2 col-span-10 p-4 flex flex-col justify-center h-60 bg-sky-600 text-white">
            <p class="flex align-center m-2 text-2xl">Geschatte woningwaarde</p>
            <p class="flex align-center m-2">€ {{ $page.props.jumbaData['Items'][0]['Payload']['JumbaValue'][0] }} - € {{ $page.props.jumbaData['Items'][0]['Payload']['JumbaValue'][1] }}</p>
        </div>  
        <div v-if="carrouselId==2 && $page.props.jumbaData['Items'][0]['Payload']['Images'][0]" class="col-start-2 col-span-10 bg-sky-600 flex flex-col justify-center">
             <img :src="$page.props.jumbaData['Items'][0]['Payload']['Images'][0]" class="object-contain h-60" />
        </div>
        <div v-if="carrouselId==2 && !$page.props.jumbaData['Items'][0]['Payload']['Images'][0]" class="col-start-2 col-span-10 p-4 flex flex-col justify-center h-60 bg-sky-600 text-white">
            <p class="flex align-center m-2 text-2xl">Geen foto beschikbaar</p>
        </div>
        <p class="col-start-12 h-60 bg-sky-600 text-white flex align-center" @click="changeCarrousel(1)">&#9002;</p>

        <!-- BUTTONS -->
        <div class="col-start-4 col-span-6 -translate-y-6 bg-gray-200 rounded-l-full rounded-r-full flex justify-content-around">
            <span class="basis-1/3 text-center border-r-2 border-white p-4 text-bold" @click=changeModal(1)>Rapport</span>
            <span class="basis-1/3 text-center border-r-2 border-white p-4 text-bold" @click=changeModal(2)>Verkopen</span>
            <span class="basis-1/3 text-center p-4 text-bold" @click=changeModal(3)>Overig</span>
        </div>

        <Modal v-if="openModal == 1" :show=true @close="closeModal">
            <div class="p-6">
                <h2 class="text-lg font-medium text-gray-900">
                    Woning waarde rapport
                </h2>
                <div class="border my-6"></div>

                <p>
                    {{ setUpperCase($page.props.jumbaData['Items'][0]['Filter']['Street']) }} 
                    {{ $page.props.jumbaData['Items'][0]['Filter']['Number'] }}
                </p>
                <p>
                    {{ setUpperCase($page.props.jumbaData['Items'][0]['Filter']['City']) }}
                </p>

                <div class="border my-6"></div>

                <li>Het complete waarderapport is ideaal voor aankoop- en verkoopinzichten. </li>
                <li>Ontvang direct de juiste en actuele waardebepaling van deze woning. </li>
                <li>Het complete waarderapport is ideaal voor aankoop- en verkoopinzichten. </li>

                <h4 class="my-6">Ontvang het rapport voor € 12,50</h4>

                <div class="grid grid-cols-12 gap-2">
                    <input id="naam" name="naam" v-model="form.naam" placeholder='Naam'
                        class="
                            col-start-1
                            col-span-4
                            pl-4
                            place-content-center
                            block
                            h-12
                            rounded-md
                            bg-gray-100
                            border-transparent
                            focus:border-gray-500 focus:bg-white focus:ring-0"
                    >
                    <input id="email" name="email" v-model="form.email" placeholder='Email'
                        class="
                            col-span-5
                            pl-4
                            place-content-center
                            block
                            h-12
                            rounded-md
                            bg-gray-100
                            border-transparent
                            focus:border-gray-500 focus:bg-white focus:ring-0"
                    >
                    <button class="col-start-10 col-span-4 h-12 btn btn-orange" @click="bestel('Aankoop Rapport')">Bestel</button>
                </div>

            </div>
        </Modal>

        <Modal v-if="openModal == 2" :show=true @close="closeModal">
            <div class="p-6">
                <h2 class="text-lg font-medium text-gray-900">
                    Woning verkopen
                </h2>
                <div class="border my-6"></div>

                <p>
                    {{ setUpperCase($page.props.jumbaData['Items'][0]['Filter']['Street']) }} 
                    {{ $page.props.jumbaData['Items'][0]['Filter']['Number'] }}
                </p>
                <p>
                    {{ setUpperCase($page.props.jumbaData['Items'][0]['Filter']['City']) }}
                </p>

                <div class="border my-6"></div>

                <li>Geheel ontzorgd de woning van uw klant verkopen. </li>
                <li>Alleen kosten als u een klant heeft.</li>
                <li>100 procent transparant en professioneel. </li>

                <h4 class="my-6"><strong>Ontvang deze service voor € 1.300,00</strong></h4>

                <div class="grid grid-cols-12 gap-2">
                    <input id="naam" name="naam" v-model="form.naam" placeholder="Naam"
                        class="
                            col-start-1
                            col-span-4
                            pl-4
                            place-content-center
                            block
                            h-12
                            rounded-md
                            bg-gray-100
                            border-transparent
                            focus:border-gray-500 focus:bg-white focus:ring-0"
                    >
                    <input id="email" name="email" v-model="form.email" placeholder="Email"
                        class="
                            col-span-5
                            pl-4
                            place-content-center
                            block
                            h-12
                            rounded-md
                            bg-gray-100
                            border-transparent
                            focus:border-gray-500 focus:bg-white focus:ring-0"
                    >
                    <button class="col-start-10 col-span-4 h-12 btn btn-orange" @click="bestel('Verkoop woning')">Bestel</button>
                </div>

            </div>
        </Modal>

        <Modal v-if="openModal == 3" :show=true @close="closeModal">
            <div class="p-6">
                <table class="mb-8">
                    <thead class="text-left h-10 font-bold border-b border-slate-300">
                        <tr class="">
                            <th class="flex-none w-12"></th>
                            <th class="grow">Omschrijving</th>
                            <th class="flex-none w-40">Prijs</th>
                        </tr>
                    </thead>
                    <tbody v-for="(product, i) in $page.props.cmsProducts" :key="i" class="">
                        <tr class="flex-cols-4 h-16 space-x-4 border-b border-slate-200">                                       
                            <span class="grid place-items-center self-center h-16">
                                <input type="radio" id="selected" name="selected" v-model="form.selected" :value="product['content']['naam']"
                                class=" ">
                            </span>
                            <td class="">{{ product['content']['beschrijving'] }}</td>
                            <td class="">€ {{ product['content']['prijs'] }}</td>
                        </tr>
                    </tbody>
                </table>

                <div class="grid grid-cols-12 gap-2">
                    <input id="naam" name="naam" v-model="form.naam" placeholder="Naam"
                        class="
                            col-start-1
                            col-span-4
                            pl-4
                            place-content-center
                            block
                            h-12
                            rounded-md
                            bg-gray-100
                            border-transparent
                            focus:border-gray-500 focus:bg-white focus:ring-0"
                    >
                    <input id="email" name="email" v-model="form.email" placeholder="Email"
                        class="
                            col-span-5
                            pl-4
                            place-content-center
                            block
                            h-12
                            rounded-md
                            bg-gray-100
                            border-transparent
                            focus:border-gray-500 focus:bg-white focus:ring-0"
                    >
                    <button class="col-start-10 col-span-4 h-12 btn btn-orange" @click="bestel(form.selected)">Bestel</button>
                </div>
            </div>
        </Modal>

    </div>

</template>