import AButton from '../../Atoms/AButton'
import { ARow, ACol } from '../../Atoms/AContainer'
import AHeading from '../../Atoms/AHeading'
import AIcon from '../../Atoms/AIcon'
import ARadioCheck from '../../Atoms/ARadioCheck'
import MChip from '../../Molecules/MChip'

export default {
  name: 'OFilter',

  components: {
    AButton,
    AHeading,
    AIcon,
    ARadioCheck,
    ARow,
    ACol,
    MChip
  },

  props: {
    chips: {
      default: null,
      type: Array
    },
    columnWidth: {
      default: 3,
      type: Number
    },
    isCollapsed: {
      default: false,
      type: Boolean
    },
    labelClose: {
      default: 'Sluit',
      type: String
    },
    labelShowFilters: {
      default: 'Toon filters',
      type: String
    },
    lists: {
      required: true,
      type: Array
    },
    submit: {
      default: null,
      type: Object
    }
  },

  computed: {
    orderedList () {
      this.lists.forEach(list => {
        list.data.options.sort((a, b) => (a.label > b.label) ? 1 : -1)
      })

      return this.lists
    }
  }
}
