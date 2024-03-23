import MAlert from './'

export default {
  title: 'Molecules/Alert',
  component: MAlert,
  argTypes: {
    isVisible: { control: { type: 'select', options: [true, false] } },
    iconVAlign: { control: { type: 'select', options: ['top', 'center', 'bottom'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MAlert },
  data () {
    return {
      isVisibleAlert: this.$props.isVisible
    }
  },
  template: `
    <MAlert
      :icon="$props.icon"
      :type="$props.type"
      :hideLine="$props.hideLine"
      :hasContainer="$props.hasContainer"
      :isClosable="$props.isClosable"
      :isVisible="isVisibleAlert"
      :iconVAlign="$props.iconVAlign"
      @close="$data.isVisibleAlert = false"
    >
      <template #title>
      Lorem ipsum dolor sit amet
      </template>
      Consectetuer adipiscing elit. Aenean commodo ligula eget
      dolor. Aenean massa. Cum sociis natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus.
    </MAlert>`
})

export const Default = Template.bind({})
Default.args = {
}

export const Danger = Template.bind({})
Danger.args = {
  type: 'danger',
  icon: 'exclamation-circle'
}

export const Info = Template.bind({})
Info.args = {
  type: 'info',
  icon: 'info-circle-o'
}

export const Success = Template.bind({})
Success.args = {
  type: 'success',
  icon: 'check-circle-o'
}

export const Warning = Template.bind({})
Warning.args = {
  type: 'warning',
  icon: 'exclamation-triangle-o'
}

export const WithoutLine = Template.bind({})
WithoutLine.args = {
  hideLine: true,
  type: 'info',
  icon: 'info-circle-o'
}

export const HasContainer = Template.bind({})
HasContainer.args = {
  hasContainer: true,
  type: 'info',
  icon: 'info-circle-o'
}

export const isClosable = Template.bind({})
isClosable.args = {
  type: 'info',
  isClosable: true
}

const IconAlignTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MAlert },
  template: `
    <MAlert
      icon="info-circle-o"
      type="info"
      :iconVAlign="$props.iconVAlign"
    >
      <template #title>
      Lorem ipsum dolor sit amet
      </template>
      Consectetuer adipiscing elit. Aenean commodo ligula eget
      dolor. Aenean massa. Cum sociis natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus.
    </MAlert>`
})
export const VerticallyAlignIconTop = IconAlignTemplate.bind({})
VerticallyAlignIconTop.args = {
  iconVAlign: 'top'
}

export const VerticallyAlignIconCenter = IconAlignTemplate.bind({})
VerticallyAlignIconCenter.args = {
  iconVAlign: 'center'
}

export const VerticallyAlignIconBottom = IconAlignTemplate.bind({})
VerticallyAlignIconBottom.args = {
  iconVAlign: 'bottom'
}
