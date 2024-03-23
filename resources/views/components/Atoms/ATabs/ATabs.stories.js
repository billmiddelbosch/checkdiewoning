import { ATab, ATabs } from './'

export default {
  title: 'Atoms/Tabs',
  component: ATabs,
  argTypes: {
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ATab, ATabs },
  template: `
    <ATabs v-bind="$props">
      <ATab title="First" :isActive="true">This is the first tab!</ATab>
      <ATab title="Second">This is the second tab!</ATab>
    </ATabs>
    `
})

export const Default = Template.bind({})
Default.args = {
}
