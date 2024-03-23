import { AContainer, ARow, ACol } from '../../Atoms/AContainer'
import AButton from '../../Atoms/AButton'
import AIcon from '../../Atoms/AIcon'
import MHeader from '../../Molecules/MHeader'
import ODataTableGroup from '../../Organisms/ODataTableGroup'

export default {
  name: 'TNestedTable',

  components: {
    AButton,
    AContainer,
    AIcon,
    MHeader,
    ARow,
    ACol,
    ODataTableGroup
  },

  props: {

    // Data table object
    dataTableGroups: {
      required: true,
      type: Array
    },

    // Page title
    title: {
      default: null,
      type: String
    },

    // Contains the button label.
    button: {
      default: null,
      type: String
    },

    // Whether or not the group contains an export.
    hasExport: Boolean,

    hasRight: Boolean
  }
}
