import ODataTableGroup from './'
import AButton from '../../Atoms/AButton'
import { ODataTableModel } from '../ODataTable'
import { OFilterModel } from '../OFilter'

const filter = new OFilterModel()
filter.isCollapsed = true
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

// Child table.
const DataTableChild = new ODataTableModel()
DataTableChild.appendFields([
  { id: 'id', label: 'Code' },
  { id: 'description', label: 'Description' }
])
DataTableChild.appendRows([
  { id: '0001', description: 'Lorem ipsum dolor' },
  { id: '0007', description: 'Aenean vulputate eleifend tellus' },
  { id: '0004', description: 'Maecenas nec odio et ante' }
])
DataTableChild.count = '2 artikelen'
DataTableChild.isVisible = false
DataTableChild.pagination = {
  page: 1,
  total: 3
}

// Parent table.
const DataTable = new ODataTableModel()
DataTable.appendFields([
  { id: 'id', label: 'Code' },
  { id: 'description', label: 'Description' }
])
DataTable.appendRows([
  {
    id: '0001',
    description: 'Lorem ipsum dolor'
  },
  {
    id: '0002',
    description: 'Donec sodales sagittis magna',
    children: DataTableChild
  },
  {
    id: '0007',
    description: 'Aenean vulputate eleifend tellus'
  },
  {
    id: '0004',
    description: 'Maecenas nec odio et ante'
  }
])
DataTable.description = {
  body: `
    Voor doelmarkt Nederland moet voor de sector levensmiddelen en
    drogisterij tenminste 1 productafbeelding aanwezig zijn voor
    nieuwe en gewijzigde consumenteneenheden.`
}
DataTable.pagination = {
  page: 1,
  total: 2
}

// Stories
export default {
  title: 'Organisms/DataTableGroup',
  component: ODataTableGroup,
  argTypes: {
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ODataTableGroup, AButton },
  methods: {
    updateObj (obj, param) {
      if (
        Object.prototype.hasOwnProperty.call(obj, 'value') &&
        typeof obj.value === 'object' &&
        obj.value !== null
      ) {
        this.updateObj(obj.value, param)
      } else {
        obj.data[param] = obj.value
      }
    }
  },
  template: `
    <ODataTableGroup
      v-bind="$props"
      @sorting="event => updateObj(event, 'order')"
      @visibility="event => updateObj(event, 'isVisible')"
      @pagination="event => updateObj(event, 'page')"
      @toggleFilter="event => $props.filter.isCollapsed = event"
    >
      <template #contentGroup-actions>
        <AButton>Some Action</AButton>
      </template>
    </ODataTableGroup>`
})

export const Default = Template.bind({})
Default.args = {
  dataTable: DataTable.data,
  title: 'Some Title',
  filter: filter.data
}
