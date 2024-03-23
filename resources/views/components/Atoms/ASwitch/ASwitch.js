export default {
  name: 'ASwitch',

  props: {

    // The label added next to the switch
    switchLabel: {
      default: '',
      type: String
    },

    hasPadding: {
      default: true,
      type: Boolean
    },

    isChecked: {
      default: false,
      type: Boolean
    },

    // The size of the button.
    size: {
      default: 'md',
      type: String,
      validator: value => {
        return [
          'xs',
          'sm',
          'md',
          'xl'
        ].indexOf(value) !== -1
      }
    },

    // Whether or not the switch is disabled.
    isDisabled: {
      default: false,
      type: Boolean
    }
  },

  computed: {
    // Return an object containing all active classes
    $_classes () {
      const baseClass = 'a-switch'
      const {
        hasPadding,
        size,
        isChecked
      } = this

      return {
        [baseClass]: true,
        [`${baseClass}--${size}`]: true,
        [`${baseClass}--has-padding`]: hasPadding,
        [`${baseClass}--is-checked`]: isChecked
      }
    }
  },
  data () {
    return {
      value: this.isChecked
    }
  },
  methods: {
    click () {
      this.value = this.value !== true
      this.$emit('click', true)
    }
  }
}
