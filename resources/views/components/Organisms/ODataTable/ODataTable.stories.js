import { ODataTable, ODataTableModel } from './'
// import ODataTableClass from './lib/ODataTable'

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
  { id: 'id', label: 'Code', isSortable: false },
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
  title: 'Organisms/DataTable',
  component: ODataTable,
  argTypes: {
    showFields: { control: { type: 'select', options: [true, false] } },
    description: { control: { disable: true }, defaultValue: null }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ODataTable },
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
    <ODataTable
      v-bind="$props"
      @sorting="event => updateObj(event, 'order')"
      @visibility="event => updateObj(event, 'isVisible')"
      @pagination="event => updateObj(event, 'page')"
    />`
})

export const Default = Template.bind({})
Default.args = DataTable.data
