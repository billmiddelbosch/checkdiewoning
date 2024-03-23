import ASpinner from './'

export default {
  title: 'Atoms/Spinner',
  component: ASpinner,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl']
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ASpinner },
  template: '<ASpinner v-bind="$props" />'
})

export const Default = Template.bind({})
Default.args = {
  size: 'sm'
}
