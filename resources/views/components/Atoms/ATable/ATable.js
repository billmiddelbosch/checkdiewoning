export default {
  name: 'ATable',

  props: {

    // Whether or not the table is bordered.
    isBordered: {
      default: false,
      type: Boolean
    },

    // Whether or not the table uses the full width of the container.
    isFullwidth: {
      default: false,
      type: Boolean
    }
  },

  computed: {

    // Return an array containing all active classes
    $_classes () {
      return [
        'a-table',
        this.isBordered ? 'a-table--bordered' : null,
        this.isFullwidth ? 'a-table--fullwidth' : null,
        this.isHoverable ? 'a-table--hoverable' : null,
        this.isStriped ? 'a-table--striped' : null
      ].filter(Boolean)
    }
  }
}
