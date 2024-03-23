import AIcon from '../../Atoms/AIcon'

export default {
  name: 'MChip',

  props: {

    // Whether or not the chip can be interacted with
    isInteractive: {
      default: true,
      type: Boolean
    },

    // make chip fill container
    isBlock: {
      default: false,
      type: Boolean
    },

    // center label in chip
    isLabelCenter: {
      default: false,
      type: Boolean
    },

    // The color of the chip.
    type: {
      default: 'info',
      type: String,
      validator: (value) => ['info', 'success', 'gray', 'grey', 'available', 'danger'].includes(value)
    }
  },

  components: {
    AIcon
  },

  computed: {
    $_classes () {
      const baseClass = 'm-chip'

      return {
        [baseClass]: true,
        [`${baseClass}--${this.type}`]: true,
        [`${baseClass}--is-block`]: this.isBlock,
        [`${baseClass}--is-label-center`]: this.isLabelCenter,
        [`${baseClass}--is-interactive`]: this.isInteractive
      }
    }
  },

  methods: {
    click () {
      if (this.isInteractive) {
        this.$emit('click', true)
      }
    }
  }
}
