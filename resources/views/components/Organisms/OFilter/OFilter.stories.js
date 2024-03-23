import { OFilter, OFilterModel } from './'

const filter = new OFilterModel()
filter.chips = [
  'Label 1', 'Label 2'
]
filter.submit = {
  label: 'Toon resultaten'
}
const listA = filter.appendList({
  label: 'Status',
  type: 'checkbox'
})
listA.appendOptions([
  { isChecked: false, isDisabled: false, label: 'Label 1', value: '1' },
  { isChecked: true, isDisabled: false, label: 'Label 2', value: '2' },
  { isChecked: true, isDisabled: false, label: 'Label 3', value: '3' }
])
const listB = filter.appendList({
  label: 'Status 2',
  type: 'radio'
})
listB.appendOptions([
  { isChecked: false, isDisabled: false, label: 'Label 1', value: '1' },
  { isChecked: true, isDisabled: false, label: 'Label 2', value: '2' },
  { isChecked: false, isDisabled: false, label: 'Label 3', value: '3' }
])

// Stories
export default {
  title: 'Organisms/Filter',
  component: OFilter,
  argTypes: {
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { OFilter },
  data () {
    return {
      collapse: this.$props.filter.isCollapsed
    }
  },
  template: `
    <OFilter
      :chips="filter.chips"
      :columnWidth="filter.columnWidth"
      :isCollapsed="$data.collapse"
      :lists="filter.lists"
      :submit="filter.submit"
      @toggleCollapse="event => $data.collapse = event"
    />`
})

export const Default = Template.bind({})
Default.args = {
  filter: filter.data
}
