import MChip from './'

export default {
  title: 'Molecules/Chip',
  component: MChip,
  argTypes: {
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MChip },
  template: `
    <MChip v-bind="$props">Some Label</MChip>`
})

export const Default = Template.bind({})
Default.args = {
}

export const NonInteractive = Template.bind({})
NonInteractive.args = {
  isInteractive: false
}
