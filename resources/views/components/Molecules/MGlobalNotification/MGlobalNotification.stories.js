import MGlobalNotification from './'

export default {
  title: 'Molecules/GlobalNotification',
  component: MGlobalNotification,
  argTypes: {
    isVisible: { control: { type: 'select', options: [true, false] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MGlobalNotification },
  data () {
    return {
      isVisibleAlert: this.$props.isVisible
    }
  },
  template: `
    <MGlobalNotification
      :icon="$props.icon"
      :type="$props.type"
      :isClosable="$props.isClosable"
      :isVisible="isVisibleAlert"
      @close="$data.isVisibleAlert = false"
    >
      <template #title>
      Lorem ipsum dolor sit amet
      </template>
      Consectetuer adipiscing elit. Aenean commodo ligula eget
      dolor. Aenean massa. Cum sociis natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus.
    </MGlobalNotification>`
})

export const Danger = Template.bind({})
Danger.args = {
  type: 'danger'
}

export const isClosable = Template.bind({})
isClosable.args = {
  type: 'info',
  isClosable: true
}
