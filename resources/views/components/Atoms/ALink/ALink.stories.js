import ALink from '.'

export default {
  title: 'Atoms/Link',
  component: ALink,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'normal', 'large']
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ALink },
  template: '<ALink v-bind="$props">Link text</ALink>'
})

export const Default = Template.bind({})
Default.args = {
  size: 'normal'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large'
}
