import AIcon from '../../Atoms/AIcon'

const alertTypes = [
  'danger',
  'info'
]

const NOTIFICATION_CLOSED = 'notification_closed'

export default {
  name: 'MGlobalNotification',

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

    // Type defines the colors used for the alert.
    type: {
      type: String,
      default: null,
      validator: (v) => alertTypes.includes(v)
    },

    message: {
      type: String,
      default: null
    }
  },

  components: {
    AIcon
  },

  data () {
    return {
      isVisible: true
    }
  },

  computed: {
    // Return an object containing all active classes
    $_classes () {
      const baseClass = 'm-global-notification'

      return {
        [baseClass]: true,
        [`${baseClass}--${this.type}`]: !!this.type,
        [`${baseClass}--no-icon`]: !this.icon,
        [`${baseClass}--not-closable`]: !this.isClosable
      }
    }
  },

  mounted () {
    if (this.type === 'info') {
      this.checkLocalStorage()
    }
  },

  methods: {
    close () {
      this.isVisible = false
      this.updateLocalStorage()
    },

    checkLocalStorage () {
      const storedValue = JSON.parse(sessionStorage.getItem(NOTIFICATION_CLOSED))

      if (storedValue === null) {
        return
      }
      this.isVisible = storedValue
    },

    updateLocalStorage () {
      let storage = sessionStorage.getItem(NOTIFICATION_CLOSED)
      storage = this.isVisible
      sessionStorage.setItem(NOTIFICATION_CLOSED, JSON.stringify(storage))
    }
  }
}
