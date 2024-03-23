import AIcon from '../../Atoms/AIcon'
import ASpinner from '../../Atoms/ASpinner'
import ATable from '../../Atoms/ATable'
import MAlert from '../../Molecules/MAlert'
import MPagination from '../../Molecules/MPagination'
import MSorting from '../../Molecules/MSorting'
import { ActionField, CallbackField, HeadingField, TextField, UnitTypeField } from './Fields'

export default {
  name: 'ODataTable',

  props: {

    // Table description.
    description: {
      default: null,
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
    },

    // Which fields to show.
    fields: {
      required: true,
      type: Array,
      validator: value => {
        let isValid = true
        value.forEach(item => {
          if (!(
            Object.prototype.hasOwnProperty.call(item, 'id') &&
            Object.prototype.hasOwnProperty.call(item, 'label') &&
            Object.prototype.hasOwnProperty.call(item, 'order')
          )) {
            isValid = false
          }
        })

        return isValid
      }
    },

    // Fill the table with this data.
    rows: {
      required: true,
      type: Array
    },

    // Whether or not data is being loaded.
    isLoading: Boolean,

    // Whether or not the table contains fieldnames above the rows.
    hasTableHeading: Boolean,

    // Table pagination
    pagination: {
      default: null,
      type: Object
    }
  },

  components: {
    ActionField,
    AIcon,
    ASpinner,
    ATable,
    CallbackField,
    HeadingField,
    MAlert,
    MPagination,
    MSorting,
    TextField,
    UnitTypeField
  },

  computed: {

    // Whether or not any of the rows contains nested data.
    $_hasNesting () {
      let hasChildren = false
      this.rows.every(item => {
        if (this.$_hasChildren(item)) {
          hasChildren = true
          return false
        }
        return true
      })
      return hasChildren
    }
  },

  data () {
    return {
      fieldTypes: {
        action: 'ActionField',
        callback: 'CallbackField',
        heading: 'HeadingField',
        text: 'TextField',
        unitType: 'UnitTypeField'
      }
    }
  },

  methods: {

    // Whether or not the specified row contains children.
    $_hasChildren (obj) {
      return Object.prototype.hasOwnProperty.call(obj, 'children')
    },

    // Returns the field type for the current column.
    mapFieldType (type) {
      return this.fieldTypes[type || 'text']
    },

    // Toggle the child data icon.
    $_toggleIcon (isVisible) {
      return 'chevron-' + (isVisible ? 'up' : 'down')
    },

    $_change (name, data, value) {
      this.$emit(name, { data, value })
    }
  }
}
