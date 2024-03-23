export default {
  name: 'ARadioCheck',

  props: {
    type: {
      default: 'radio',
      type: String,
      validator: function (value) {
        // The value must match one of these strings
        return ['radio', 'checkbox'].indexOf(value) !== -1
      }
    },
    options: {
      default: () => [" "],
      type: Array,
      required: false,
    }
  },

  computed: {

    // Return an object containing all active classes
    $_classes () {
      const baseClass = 'a-radiocheck'

      return {
        [baseClass]: true,
        [`${baseClass}--${this.type}`]: true
      }
    }
  },

  data () {
    return {
      values: this.type === 'radio' ? null : []
    }
  },

  methods: {
    handleChange () {
      this.$emit('change', this.values)
    },
    updateValues () {
      const checkedOptions = this.options.filter(o => o.isChecked)

      this.values = this.type === 'checkbox'
        ? checkedOptions.map(o => o.value)
        : checkedOptions.length
          ? checkedOptions[checkedOptions.length - 1].value
          : null
    }
  },

  watch: {
    options: {
      immediate: true,
      deep: true,
      handler: function () {
        this.updateValues()
      }
    },
    type: {
      handler: function () {
        this.updateValues()
      }
    }
  }
}
