import ARadioCheck from './'

export default {
  title: 'Atoms/RadioCheck',
  component: ARadioCheck,
  argTypes: {
    // isChecked: { control: { type: 'select', options: [true, false] } },
    // isDisabled: { control: { type: 'select', options: [true, false] } },
    type: { control: { type: 'select', options: ['checkbox', 'radio'] } },
    change: { action: 'change' }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ARadioCheck },
  template: '<ARadioCheck v-bind="$props" v-on="$props" />'
})

export const Default = Template.bind({})
Default.args = {
  options: [
    { isChecked: false, isDisabled: false, label: 'Label 1', value: '1' },
    { isChecked: false, isDisabled: false, label: 'Label 2', value: '2' },
    { isChecked: false, isDisabled: false, label: 'Label 3', value: '3' }
  ]
}

export const Checkbox = Template.bind({})
Checkbox.args = {
  type: 'checkbox',
  options: [
    { isChecked: false, isDisabled: false, label: 'Label 1', value: '1' },
    { isChecked: false, isDisabled: false, label: 'Label 2', value: '2' },
    { isChecked: false, isDisabled: false, label: 'Label 3', value: '3' }
  ]
}

export const MaxHeight = Template.bind({})
MaxHeight.args = {
  type: 'checkbox',
  options: [
    { isChecked: false, isDisabled: false, label: 'Label 1', value: '1' },
    { isChecked: false, isDisabled: false, label: 'Label 2', value: '2' },
    { isChecked: false, isDisabled: false, label: 'Label 3', value: '3' },
    { isChecked: false, isDisabled: false, label: 'Label 4', value: '4' },
    { isChecked: false, isDisabled: false, label: 'Label 5', value: '5' },
    { isChecked: false, isDisabled: false, label: 'Label 6', value: '6' },
    { isChecked: false, isDisabled: false, label: 'Label 7', value: '7' },
    { isChecked: false, isDisabled: false, label: 'Label 8', value: '8' },
    { isChecked: false, isDisabled: false, label: 'Label 9', value: '9' },
    { isChecked: false, isDisabled: false, label: 'Label 10', value: '10' },
    { isChecked: false, isDisabled: false, label: 'Label 11', value: '11' },
    { isChecked: false, isDisabled: false, label: 'Label 12', value: '12' }
  ]
}

// export const Disabled = Template.bind({})
// Disabled.args = {
//   // isDisabled: true,
//   type: 'checkbox'
// }

// export const Checked = Template.bind({})
// Checked.args = {
//   // isChecked: true,
//   type: 'checkbox'
// }
