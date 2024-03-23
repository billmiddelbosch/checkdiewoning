import AVr from './'

export default {
  title: 'Atoms/Vertical Rule',
  component: AVr,
  decorators: [() => ({ template: '<div><div style="color: #ccc; margin-bottom: 1em; font-family: arial;">Container</div><div style="display:flex; height:300px; border: dashed 1px #eee;"><story/></div></div>' })],
  argTypes: {
    align: {
      control: {
        type: 'select',
        options: ['center', 'left', 'right']
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AVr },
  template: '<AVr v-bind="$props" />'
})

export const Default = Template.bind({})
Default.args = {
}
