import debounce from 'debounce'
import AIcon from '../../Atoms/AIcon'
import iconList from '../../Atoms/AIcon/icons.json'

export default {
  name: 'InputField',

  components: {
    AIcon
  },

  props: {

    orientation: {
      type: String,
      default: 'vertical',
      validator: (value) => { return ['horizontal', 'vertical'].includes(value) }
    },

    disabled: {
      type: Boolean,
      default: false
    },

    label: {
      type: String,
      default: null,
      required: false
    },

    placeholder: {
      type: String,
      default: null,
      required: false
    },

    type: {
      type: [String, Number],
      default: 'text',
      validator: value => { return ['text', 'email', 'password', 'number', 'tel'].includes(value) }
    },

    msg: {
      type: String,
      default: null
    },

    state: {
      type: String,
      default: null,
      validator: value => { return [null, 'error', 'correct'].includes(value) }
    },

    iconLeft: {
      type: String,
      default: null,
      validator: (name) => Object.keys(iconList).includes(name)
    },

    iconRight: {
      type: String,
      default: null,
      validator: (name) => Object.keys(iconList).includes(name)
    },

    value: {
      type: String,
      default: null
    },

    maxlength: {
      type: Number,
      default: null
    },

    // Custom data-atrribute for testing
    testTag: {
      type: String,
      default: null
    },
    /// Nog niet gebruikt
    debounce: {
      type: String,
      default: "0",
      required: false
    }

  },

  data () {
    return {
      isActive: false
    }
  },

  watch: {
    isActive (newVal, oldVal) {
      if (newVal === true) {
        this.$emit('focus', this.$refs.input.value)
      } else if (newVal === false) {
        this.$emit('blur', this.$refs.input.value)
      }
    }
  },

  methods: {
    handleKeyUp: debounce(function ($event) {
      this.$emit('update:value', $event.target.value)
      this.$emit('change', this.value)
    }, 500 ),
    
    handleKeyPress ($event) {
      if (this.type === 'number') {
        this.isNumber($event)
      }
    },

    isNumber: function (evt) {
      evt = (evt) || window.event
      var charCode = (evt.which) ? evt.which : evt.keyCode
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && (charCode === 46 || charCode === 101)) {
        evt.preventDefault()
      } else {
        return true
      }
    }
  },

  computed: {

    dataRtValue() {
      return this.testTag ? testTag : 'AInput';
    },

    $_inputFieldClasses () {
      const baseClass = 'a-inputfield'
      const inputStates = {
        error: 'error',
        correct: 'correct'
      }

      return {
        [baseClass]: true,
        [`${baseClass}--${this.orientation}`]: true,
        [`${baseClass}--${this.isActive}`]: this.isActive,
        [`${baseClass}--${inputStates[this.state]}`]: this.state,
        [`${baseClass}--disabled`]: this.disabled
      }
    },

    $_inputClasses () {
      const baseClass = 'a-inputfield__field'

      return {
        [baseClass]: true
      }
    },

    $_labelClasses () {
      const baseClass = 'a-inputfield__container'

      return {
        [baseClass]: true
      }
    },

    $_iconName () {
      const icons = {
        error: 'exclamation-circle',
        correct: 'check-circle-fill'
      }

      return this.state ? icons[this.state] : null
    }
  }
}
