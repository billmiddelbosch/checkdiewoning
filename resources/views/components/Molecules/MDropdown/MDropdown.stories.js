import { MDropdown, MDropdownItem } from './'

export default {
  title: 'Atoms/Dropdown',
  component: MDropdownItem,
  argTypes: {
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MDropdown, MDropdownItem },
  template: `
    <MDropdown v-bind="$props" label="Dropdown Label">
      <MDropdownItem>This is the first item!</MDropdownItem>
      <MDropdownItem>This is the second item!</MDropdownItem>
    </MDropdown>
    `
})

export const Default = Template.bind({})
Default.args = {
}
