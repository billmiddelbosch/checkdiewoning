import { AContainer, ARow, ACol } from './'

export default {
  title: 'Atoms/Container',
  component: AContainer,
  argTypes: {
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AContainer, ARow, ACol },
  template: `
    <AContainer v-bind="$props">
      <ARow>
        <ACol>1 of 4</ACol>
        <ACol>2 of 4</ACol>
        <ACol>3 of 4</ACol>
        <ACol>4 of 4</ACol>
      </ARow>
      <ARow>
        <ACol>1 of 2</ACol>
        <ACol>2 of 2</ACol>
      </ARow>
      <ARow>
        <ACol>1 of 3</ACol>
        <ACol>2 of 3</ACol>
        <ACol>3 of 3</ACol>
      </ARow>
      <ARow>
        <ACol col :lg="8">1 of 2</ACol>
        <ACol :cols="4">2 of 2</ACol>
      </ARow>
    </AContainer>`
})

export const Default = Template.bind({})
Default.args = {
}
