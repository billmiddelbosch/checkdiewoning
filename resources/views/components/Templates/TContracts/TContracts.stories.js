import TContracts from './'
import { MFormDescriptionModel } from '../../Molecules/MFormDescription'
import { OContractCollection } from '../../Organisms/OContracts'
import { OAlertCollection } from '../../Organisms/OAlerts'
import { OFormGroupButtonCollection } from '../../Organisms/OFormGroupButtons'

// Buttons
const Buttons = new OFormGroupButtonCollection()
Buttons.appendMultiple([
  {
    id: 'dms-change',
    label: 'Wijzig DMS'
  },
  {
    id: 'gtin-change',
    label: 'Wijzig DMS  voor specifieke GTIN\'s',
    type: 'outline'
  }
])

// Empty state buttons
const ButtonsEmptyState = new OFormGroupButtonCollection()
ButtonsEmptyState.append({
  id: 'dms-change',
  label: 'DMS toevoegen',
  type: 'solid'
})

// Alerts
const Alerts = new OAlertCollection()
Alerts.append({
  id: 'alert-1',
  body: `
    Consectetuer adipiscing elit. Aenean commodo ligula eget
    dolor. Aenean massa. Cum sociis natoque penatibus et
    magnis dis parturient montes, nascetur ridiculus mus.`,
  icon: 'info-circle-o',
  isClosable: true,
  isVisible: true,
  title: 'Lorem ipsum dolor sit amet',
  type: 'info'
})

// Contracts
const Contracts = new OContractCollection()
Contracts.appendMultiple([
  {
    name: 'Foodbyte',
    address: 'Riddererf 2',
    postalcode: '3861 PT',
    location: 'Nijkerk',
    phone: '+31332477150',
    email: 'info@foodbyte.nl',
    url: 'https://www.foodbyte.nl',
    controlLabel: 'Contract controle voor',
    controls: ['Etiket drogisterij', 'Etiket levensmiddelen']
  },
  {
    name: 'Nielsen Brandbank',
    address: 'Linieveste 4-8',
    postalcode: '3992 DJ',
    location: 'Houten',
    phone: '+302040770',
    email: 'info@email.nl',
    url: 'https://www.brandbank.com',
    controlLabel: 'Contract uitbesteding voor',
    controls: ['Logistiek']
  },
  {
    name: 'Dr. Oetker Nederland B.V.',
    controlLabel: 'Contract controle voor',
    controls: ['Logistiek']
  }
])

// Empty state description
const description = new MFormDescriptionModel({
  title: 'Lorem ipsum dolor sit amet',
  body: `
    Consectetuer adipiscing elit. Aenean commodo ligula eget
    dolor. Aenean massa. Cum sociis natoque penatibus et
    magnis dis parturient montes, nascetur ridiculus mus.`
})

export default {
  title: 'Templates/Contracts',
  component: TContracts,
  argTypes: {
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TContracts },
  methods: {
    closeAlert (id) {
      this.$props.alerts.deleteModelById(id)

      console.log(`Alert '${id}' was removed.`)
    },
    clickButton (id) {
      console.log(`Button '${id}' was clicked.`)
    }
  },
  template: `
    <TContracts
      v-bind="$props"
      @close="closeAlert"
      @click="clickButton"
    />`
})

export const Default = Template.bind({})
Default.args = {
  contracts: Contracts,
  title: 'Mijn DMS',
  buttons: Buttons,
  hasRight: true,
  alerts: Alerts,
  description: description
}

export const Empty = Template.bind({})
Empty.args = {
  contracts: new OContractCollection(),
  title: 'Mijn DMS',
  buttons: ButtonsEmptyState,
  hasRight: true,
  alerts: new OAlertCollection(),
  description: description
}
