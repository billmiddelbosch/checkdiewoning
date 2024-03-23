import AHeading from './'

export default {
  title: 'Atoms/Heading',
  component: AHeading,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5']
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AHeading },
  template: '<AHeading v-bind="$props">Some Heading</AHeading>'
})

export const Default = Template.bind({})
Default.args = {
}
