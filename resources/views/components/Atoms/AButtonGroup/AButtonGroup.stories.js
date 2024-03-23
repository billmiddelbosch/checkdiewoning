import AButtonGroup from './AButtonGroup.vue'
import AButton from '../AButton'
import AIcon from '../AIcon'

export default {
  title: 'Atoms/ButtonGroup',
  component: AButtonGroup,
  argTypes: {
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AButtonGroup, AButton, AIcon },
  template: `
  <AButtonGroup v-bind="$props">
    <AButton :size="$props.size" color="ui-1">
      <AIcon :size="$props.size" icon="arrow-left-short" />
    </AButton>
    <AButton :size="$props.size" color="ui-1">1</AButton>
    <AButton :size="$props.size" color="ui-1">2</AButton>
    <AButton :size="$props.size" color="ui-1">3</AButton>
    <AButton :size="$props.size" color="ui-1">4</AButton>
    <AButton :size="$props.size" color="ui-1">5</AButton>
    <AButton :size="$props.size" color="ui-1">
      <AIcon :size="$props.size" icon="arrow-right-short" />
    </AButton>
  </AButtonGroup>`
})

export const Default = Template.bind({})
Default.args = {
  size: 'sm'
}

export const ExtraSmall = Template.bind({})
ExtraSmall.args = {
  size: 'xs'
}
