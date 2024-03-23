import AIcon from '../../Atoms/AIcon'

const alertTypes = [
  'content',
  'info',
  'success',
  'warning',
  'danger'
]

const iconVAlignTypes = [
  'top',
  'center',
  'bottom'
]

export default {
  name: 'MAlert',

  props: {

    // An optional icon.
    icon: {
      type: String,
      default: null
    },

    // Whether or not the alert can be closed.
    isClosable: {
      type: Boolean,
      default: false
    },

    // Whether or not the alert is visible.
    isVisible: {
      type: Boolean,
      default: true
    },

    // Whether or not the line is visible.
    hideLine: {
      type: Boolean,
      default: false
    },

    // Whether or not the alert has container.
    hasContainer: {
      type: Boolean,
      default: false
    },

    iconVAlign: {
      type: String,
      default: 'top',
      validator: (v) => iconVAlignTypes.includes(v)
    },

    // Type defines the colors used for the alert.
    type: {
      type: String,
      default: null,
      validator: (v) => alertTypes.includes(v)
    },

// Custom data-atrribute for testing
      testTag: {
        type: String,
        default: null
      },
  },

  components: {
    AIcon
  },

  computed: {

    dataRtValue() {
      return this.testTag ? testTag : 'MAlert';
    },

    // Return an object containing all active classes
    $_classes () {
      const baseClass = 'm-alert'

      return {
        [baseClass]: true,
        [`${baseClass}--${this.type}`]: !!this.type,
        [`${baseClass}--no-icon`]: !this.icon,
        [`${baseClass}--icon-v-align-${this.iconVAlign}`]: this.iconVAlign,
        [`${baseClass}--not-closable`]: !this.isClosable,
        [`${baseClass}--no-line`]: this.hideLine
      }
    },

    $_innerClasses () {
      const baseClass = 'm-alert__inner'

      return {
        [baseClass]: true,
        container: this.hasContainer
      }
    }
  },

  methods: {
    close () {
      this.$emit('close', true)
    }
  }
}
