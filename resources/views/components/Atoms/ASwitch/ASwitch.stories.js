import ASwitch from '.'

export default {
  title: 'Atoms/Switch',
  component: ASwitch,
  argTypes: {
    hasPadding: { control: { type: 'select', options: [true, false] } },
    size: { control: { type: 'select', options: ['xs', 'sm', 'md'] } },
    isDisabled: { control: { type: 'select', options: [true, false] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ASwitch },
  template: '<ASwitch v-bind="$props">Label</ASwitch>'
})

export const Default = Template.bind({})
Default.args = {}

// export const DisabledSolid = Template.bind({})
// DisabledSolid.args = {
//   isDisabled: true
// }

// export const DisabledOutline = Template.bind({})
// DisabledOutline.args = {
//   isDisabled: true,
//   type: 'outline'
// }

// export const AlternateColor = Template.bind({})
// AlternateColor.args = {
//   color: 'blue'
// }

// export const Outline = Template.bind({})
// Outline.args = {
//   type: 'outline'
// }

export const Small = Template.bind({})
Small.args = {
  size: 'sm'
}

export const ExtraSmall = Template.bind({})
ExtraSmall.args = {
  size: 'xs'
}

// export const LinkOnly = Template.bind({})
// LinkOnly.args = {
//   color: 'link-only'
// }

// export const NoPadding = Template.bind({})
// NoPadding.args = {
//   color: 'link-only',
//   hasPadding: false
// }

// export const isFullWidth = Template.bind({})
// isFullWidth.args = {
//   width: 'is-full-with',
//   isFullWidth: false
// }
