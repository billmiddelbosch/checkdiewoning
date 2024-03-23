import { ARow, ACol } from '../../Atoms/AContainer'
import AHeading from '../../Atoms/AHeading'
import ASpinner from '../../Atoms/ASpinner'
import { MFormDescription, MFormDescriptionModel } from '../../Molecules/MFormDescription'
import OContractCollection from './lib/OContractCollection'

export default {
  name: 'OContracts',

  props: {
    contracts: {
      type: Object,
      validator: function (value) {
        return value instanceof OContractCollection
      }
    },
    description: {
      type: Object,
      validator: function (value) {
        return value instanceof MFormDescriptionModel
      }
    }
  },

  components: {
    AHeading,
    ARow,
    ACol,
    ASpinner,
    MFormDescription
  },

  data () {
    return {
      links: [
        { label: 'Telefoon', field: 'phone', hrefPrefix: 'tel:' },
        { label: 'E-mail', field: 'email', hrefPrefix: 'mailto:' },
        { label: 'Website', field: 'url', hrefPrefix: '' }
      ]
    }
  },

  methods: {
    hasAddress (contract) {
      return this.$_hasFields(contract, ['address', 'postalcode', 'location'])
    },

    hasLinks (contract) {
      return this.$_hasFields(contract, this.links.map(prop => prop.field))
    },

    $_hasFields (obj, fields) {
      return !fields.every(field => {
        if (Object.prototype.hasOwnProperty.call(obj, field) && obj[field]) {
          return false
        }
        return true
      })
    }
  }
}
