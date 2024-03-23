import MSorting from './'

export default {
  title: 'Molecules/Sorting',
  component: MSorting,
  argTypes: {
    order: { control: { type: 'select', options: ['asc', 'desc', null] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MSorting },
  data () {
    return {
      currentOrder: this.order
    }
  },
  template: `
    <MSorting
      :order="$data.currentOrder"
      @change="event => $data.currentOrder = event"
    >Label</MSorting>`
})

export const Default = Template.bind({})
Default.args = {
  order: 'asc'
}
