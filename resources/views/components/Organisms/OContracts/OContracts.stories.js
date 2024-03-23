import { OContracts, OContractCollection } from './'
import { MFormDescriptionModel } from '../../Molecules/MFormDescription'

const Contracts = new OContractCollection()
// Contracts.startLoading()
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
// Contracts.stopLoading()

export default {
  title: 'Organisms/Contracts',
  component: OContracts,
  argTypes: {}
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { OContracts },
  template: '<OContracts v-bind="$props" />'
})

export const Default = Template.bind({})
Default.args = {
  contracts: Contracts,
  description: new MFormDescriptionModel({
    title: 'Lorem ipsum dolor sit amet',
    body: `
      Consectetuer adipiscing elit. Aenean commodo ligula eget
      dolor. Aenean massa. Cum sociis natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus.`
  })
}

export const Empty = Template.bind({})
Empty.args = {
  contracts: new OContractCollection(),
  description: new MFormDescriptionModel({
    title: 'Lorem ipsum dolor sit amet',
    body: `
      Consectetuer adipiscing elit. Aenean commodo ligula eget
      dolor. Aenean massa. Cum sociis natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus.`
  })
}
