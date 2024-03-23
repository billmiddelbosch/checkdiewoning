import ARadioButton from '.'

export default {
  title: 'Atoms/RadioButton',
  component: ARadioButton,
  argTypes: {
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ARadioButton },
  template: '<ARadioButton v-bind="$props" />'
})

export const Default = Template.bind({})
Default.args = {}
