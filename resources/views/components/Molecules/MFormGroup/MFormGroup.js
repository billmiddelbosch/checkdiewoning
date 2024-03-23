import { ARow, ACol } from '../../Atoms/AContainer'

export default {
  name: 'MFormGroup',

  props: {
    isInline: {
      default: false,
      type: Boolean
    },
    hasTopMargin: {
      default: false,
      type: Boolean
    }
  },

  components: {
    ARow,
    ACol
  },

  computed: {

    // Return an object containing all active classes
    $_classes () {
      const baseClass = 'm-formgroup'
      return {
        [baseClass]: true,
        [`${baseClass}--inline`]: this.isInline,
        [`${baseClass}--top-margin`]: this.hasTopMargin
      }
    }
  }
}
