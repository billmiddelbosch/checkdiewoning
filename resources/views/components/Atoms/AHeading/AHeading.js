export default {
  name: 'AHeading',

  props: {

    hasMargin: {
      default: false,
      type: Boolean
    },

    // Size/importance of the heading. Uses HTML headings h1-h6.
    size: {
      default: 'h1',
      type: String,
      validator: value => {
        return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].indexOf(value) !== -1
      }
    }
  },

  computed: {

    // Return an object containing all active classes
    $_classes () {
      const baseClass = 'a-heading'

      return {
        [baseClass]: true,
        [`${baseClass}--${this.size}`]: true,
        [`${baseClass}--has-margin`]: this.hasMargin
      }
    }
  }
}
