import { ARow, ACol } from '../../Atoms/AContainer'
import MAlert from '../../Molecules/MAlert'
import OAlertCollection from './lib/OAlertCollection'

export default {
  name: 'OAlerts',

  props: {
    alerts: {
      type: Object,
      validator: function (value) {
        return value instanceof OAlertCollection
      }
    }
  },

  components: {
    ACol,
    ARow,
    MAlert
  },

  methods: {
    close (value) {
      this.$emit('close', value)
    }
  }
}
