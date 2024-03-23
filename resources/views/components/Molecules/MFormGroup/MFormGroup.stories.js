import MFormGroup from './'
import AButton from '../../Atoms/AButton'

export default {
  title: 'Molecules/FormGroup',
  component: MFormGroup,
  argTypes: {
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MFormGroup, AButton },
  template: `
    <MFormGroup v-bind="$props">
      <AButton>Button 1</AButton>
      <AButton type="outline">Button 2</AButton>
    </MFormGroup>`
})

export const Default = Template.bind({})
Default.args = {
}

export const InlineWithTopMargin = Template.bind({})
InlineWithTopMargin.args = {
  isInline: true,
  hasTopMargin: true
}
