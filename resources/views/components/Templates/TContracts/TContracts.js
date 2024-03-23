import { ARow, ACol } from '../../Atoms/AContainer'
import { OContracts, OContractCollection } from '../../Organisms/OContracts'
import MHeader from '../../Molecules/MHeader'
import { OAlerts, OAlertCollection } from '../../Organisms/OAlerts'
import OOnboarding from '../../Organisms/OOnboarding'
import { OFormGroupButtons, OFormGroupButtonCollection } from '../../Organisms/OFormGroupButtons'

export default {
  name: 'TContracts',

  components: {
    ACol,
    ARow,
    OContracts,
    MHeader,
    OAlerts,
    OFormGroupButtons,
    OOnboarding
  },

  props: {

    hasRight: Boolean,
    alerts: {
      type: Object,
      validator: function (value) {
        return value instanceof OAlertCollection
      }
    },

    buttons: {
      type: Object,
      validator: function (value) {
        return value instanceof OFormGroupButtonCollection
      }
    },

    // A collection of contracts
    contracts: {
      type: Object,
      validator: function (value) {
        return value instanceof OContractCollection
      }
    },

    // Page title
    title: {
      default: null,
      type: String
    },

    onboardingKey: {
      default: null,
      stype: String
    },

    // Contracts empty state description
    description: {
      type: Object,
      validator: value => {
        let isValid = true
        if (!(
          Object.prototype.hasOwnProperty.call(value, 'title') ||
          Object.prototype.hasOwnProperty.call(value, 'body')
        )) {
          isValid = false
        }

        return isValid
      }
    }
  },

  methods: {
    click (value) {
      this.$emit('click', value)
    },

    close (value) {
      this.$emit('close', value)
    }
  }
}
