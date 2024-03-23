import MPagination from './'

export default {
  title: 'Molecules/Pagination',
  component: MPagination,
  argTypes: {
    pagination: { disable: true }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MPagination },
  data () {
    return {
      currentPage: this.page
    }
  },
  template: `
    <MPagination
      :page="$data.currentPage"
      :total="$props.total"
      @change="event => $data.currentPage = event"
    />`
})

export const Default = Template.bind({})
Default.args = {
  page: 1,
  total: 10
}
