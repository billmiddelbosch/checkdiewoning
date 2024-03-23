import AInputField from '.'
import iconList from '../AIcon/icons.json'

export default {
  title: 'Atoms/InputField',
  component: AInputField,
  argTypes: {
    type: { control: { type: 'select', options: ['text', 'password'] } },
    state: { control: { type: 'select', options: [null, 'error', 'correct'] } },
    orientation: { control: { type: 'select', options: ['vertical', 'horizontal'] } },
    placeholder: { control: { type: 'text' } },
    disabled: { control: { type: 'select', options: [false, true] } },
    iconLeft: { control: { type: 'select', options: [...Object.keys(iconList)] } },
    iconRight: { control: { type: 'select', options: [...Object.keys(iconList)] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AInputField },
  template: '<AInputField v-bind="$props"></AInputField>'
})

export const Default = Template.bind({})
Default.args = {}
