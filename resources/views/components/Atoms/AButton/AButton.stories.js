import AButton from './'

export default {
  title: 'Atoms/Button',
  component: AButton,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['orange-accessible', 'blue', 'link-only']
      }
    },
    hasPadding: { control: { type: 'select', options: [true, false] } },
    size: { control: { type: 'select', options: ['xs', 'sm', 'md'] } },
    type: { control: { type: 'select', options: ['solid', 'outline'] } },
    isDisabled: { control: { type: 'select', options: [true, false] } },
    isFullWidth: { control: { type: 'select', options: [true, false] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AButton },
  template: '<AButton v-bind="$props">Label</AButton>'
})

export const Default = Template.bind({})
Default.args = {}

export const DisabledSolid = Template.bind({})
DisabledSolid.args = {
  isDisabled: true
}

export const DisabledOutline = Template.bind({})
DisabledOutline.args = {
  isDisabled: true,
  type: 'outline'
}

export const AlternateColor = Template.bind({})
AlternateColor.args = {
  color: 'blue'
}

export const Outline = Template.bind({})
Outline.args = {
  type: 'outline'
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm'
}

export const ExtraSmall = Template.bind({})
ExtraSmall.args = {
  size: 'xs'
}

export const LinkOnly = Template.bind({})
LinkOnly.args = {
  color: 'link-only'
}

export const NoPadding = Template.bind({})
NoPadding.args = {
  color: 'link-only',
  hasPadding: false
}

export const isFullWidth = Template.bind({})
isFullWidth.args = {
  width: 'is-full-with',
  isFullWidth: false
}
