export default {
  name: 'ACol',

  props: {

    // Whether or not to use the .col class.
    col: Boolean,

    // The width of the column, i.e. column is 8 columns wide.
    cols: {
      default: null,
      type: Number
    },

    // Same as cols, but specifically to medium viewports.
    md: {
      default: null,
      type: Number
    },

    // Same as cols, but specifically to large viewports.
    lg: {
      default: null,
      type: Number
    }
  },

  computed: {

    // Return an object containing all active classes
    $_classes () {
      const baseClass = 'a-col'
      const {
        col,
        cols,
        md,
        lg
      } = this

      return {
        [baseClass]: (!md && !lg && !cols) || col,
        [`${baseClass}-${cols}`]: cols,
        [`${baseClass}--md-${md}`]: md,
        [`${baseClass}--lg-${lg}`]: lg
      }
    }
  }
}
