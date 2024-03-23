import { OAlerts, OAlertCollection } from './'

// Alerts
const Alerts = new OAlertCollection()
const alertTypes = [
  { type: 'info', icon: 'info-circle-o', isClosable: false },
  { type: 'danger', icon: 'exclamation-circle', isClosable: false },
  { type: 'warning', icon: 'exclamation-triangle-o', isClosable: true },
  { type: 'success', icon: 'check-circle-o', isClosable: false }
]
alertTypes.forEach((alertType, index) => {
  Alerts.append({
    id: `alert-${index}`,
    body: `
      Consectetuer adipiscing elit. Aenean commodo ligula eget
      dolor. Aenean massa. Cum sociis natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus.`,
    icon: alertType.icon,
    title: 'Lorem ipsum dolor sit amet',
    type: alertType.type,
    isClosable: alertType.isClosable
  })
})

// Stories
export default {
  title: 'Organisms/Alerts',
  component: OAlerts
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { OAlerts },
  methods: {
    closeAlert (id) {
      this.$props.alerts.deleteModelById(id)
    }
  },
  template: '<OAlerts v-bind="$props" @close="closeAlert" />'
})

export const Default = Template.bind({})
Default.args = {
  alerts: Alerts
}
