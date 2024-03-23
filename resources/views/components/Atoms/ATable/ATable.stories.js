import ATable from './'

export default {
  title: 'Atoms/Table',
  component: ATable,
  argTypes: {
    isBordered: { control: { type: 'select', options: [true, false] } },
    isFullwidth: { control: { type: 'select', options: [true, false] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ATable },
  template: `
    <ATable v-bind="$props">
      <template #head>
        <th>Title 1</th>
        <th>Title 2</th>
      </template>
      <template #body>
        <tr>
          <td>Column 1</td>
          <td>Column 2</td>
        </tr>
        <tr>
          <td>Column 1</td>
          <td>Column 2</td>
        </tr>
      </template>
    </ATable>
  `
})

export const Default = Template.bind({})
Default.args = {
}

export const Full = Template.bind({})
Full.args = {
  isBordered: true,
  isFullwidth: true,
  isHoverable: true
}

export const isBordered = Template.bind({})
isBordered.args = {
  isBordered: true
}

export const isFullwidth = Template.bind({})
isFullwidth.args = {
  isFullwidth: true
}

const Striped = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ATable },
  template: `
    <ATable v-bind="$props">
      <template #head>
        <th>Title 1</th>
        <th>Title 2</th>
      </template>
      <template #body>
        <tr class="a-table--row-odd">
          <td>Column 1</td>
          <td>Column 2</td>
        </tr>
        <tr class="a-table--row-even">
          <td>Column 1</td>
          <td>Column 2</td>
        </tr>
      </template>
    </ATable>
  `
})

export const isStriped = Striped.bind({})
isStriped.args = {
  isBordered: true,
  isFullwidth: true
}
