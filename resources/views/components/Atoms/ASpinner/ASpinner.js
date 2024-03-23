export default {
  name: 'BaseSpinner',

  props: {

    // The size of the spinner.
    size: {
      default: 'xl',
      type: String,
      validator: value => {
        return [
          'xs',
          'sm',
          'md',
          'lg',
          'xl'
        ].indexOf(value) !== -1
      }
    }
  },

  computed: {

    // Return an array containing all active classes
    $_classes () {
      return [
        'a-spinner',
        'a-spinner--' + this.size
      ]
    }
  }
}
