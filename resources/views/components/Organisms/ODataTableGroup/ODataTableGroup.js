import AHeading from '../../Atoms/AHeading'
import MContentGroup from '../../Molecules/MContentGroup'
import { ODataTable } from '../../Organisms/ODataTable'
import { OFilter } from '../../Organisms/OFilter'

export default {
  name: 'ODataTableGroup',

  props: {

    // Data table object.
    dataTable: {
      required: true,
      type: Object
    },

    // Filter object.
    filter: {
      default: null,
      type: Object
    },

    // Group title.
    title: {
      required: true,
      type: String
    }
  },

  components: {
    AHeading,
    MContentGroup,
    ODataTable,
    OFilter
  },

  data () {
    return {
      isCollapsed: false
    }
  }
}
