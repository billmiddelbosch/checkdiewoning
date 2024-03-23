import MHeader from './'

export default {
  title: 'Molecules/Header',
  component: MHeader,
  argTypes: {
    size: { control: { type: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MHeader },
  template: `
    <MHeader v-bind="$props">
      ...Right column content...
    </MHeader>`
})

export const Default = Template.bind({})
Default.args = {
  title: 'Some Page Title',
  size: 'h1'
}
