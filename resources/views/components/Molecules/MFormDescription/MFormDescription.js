import AHeading from '../../Atoms/AHeading'
import { ACol, ARow } from '../../Atoms/AContainer'

export default {
  name: 'MFormDescription',

  props: {

    body: {
      required: true,
      type: String
    },

    hasTopMargin: {
      default: false,
      type: Boolean
    },

    title: {
      default: null,
      type: String
    }
  },

  components: {
    ACol,
    AHeading,
    ARow
  },

  computed: {

    // Return an object containing all active classes
    $_classes () {
      const baseClass = 'm-formdescription'
      return {
        [baseClass]: true,
        [`${baseClass}--top-margin`]: this.hasTopMargin
      }
    }
  }
}
