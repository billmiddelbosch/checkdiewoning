import { OFormGroupButtons, OFormGroupButtonCollection } from './'

// Buttons
const Buttons = new OFormGroupButtonCollection()
Buttons.appendMultiple([
  { id: 'button-1', label: 'Primary', type: 'solid' },
  { id: 'button-2', label: 'Secondary', type: 'outline' }
])

// Stories
export default {
  title: 'Organisms/FormGroupButtons',
  component: OFormGroupButtons,
  argTypes: {
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { OFormGroupButtons },
  template: '<OFormGroupButtons v-bind="$props" />'
})

export const Default = Template.bind({})
Default.args = {
  buttons: Buttons
}
