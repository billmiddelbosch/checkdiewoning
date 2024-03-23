import AHeading from '../../Atoms/AHeading'
import { ACol, ARow } from '../../Atoms/AContainer'
import AIcon from '../../Atoms/AIcon'

const ONBOARDING_VISIBLE = 'onboarding'

export default {
  name: 'OOnboarding',

  props: {
    onboardingKey: {
      required: true,
      default: null,
      type: String
    }
  },

  components: {
    AHeading,
    ACol,
    ARow,
    AIcon
  },

  data () {
    return {
      isVisible: true
    }
  },

  mounted () {
    this.checkLocalStorage()
  },

  computed: {
    // Return an object containing all active classes
    $_classes () {
      const baseClass = 'o-onboarding'
      return {
        [baseClass]: true
      }
    },
    title () {
      return this.$t(`dataquality.onboarding.${this.onboardingKey}.title`)
    },
    text () {
      return this.$t(`dataquality.onboarding.${this.onboardingKey}.text`)
    }
  },

  methods: {
    close () {
      this.isVisible = false
      this.updateLocalStorage()
    },

    open () {
      this.isVisible = true
      this.updateLocalStorage()
    },

    checkLocalStorage () {
      if (this.onboardingKey === null) return
      const storedValue = JSON.parse(localStorage.getItem(ONBOARDING_VISIBLE))

      if (storedValue === null) {
        return
      }

      if (Object.prototype.hasOwnProperty.call(storedValue, [this.onboardingKey])) {
        this.isVisible = storedValue[this.onboardingKey]
      }
    },

    updateLocalStorage () {
      if (this.onboardingKey === null) return
      let storage = localStorage.getItem(ONBOARDING_VISIBLE)
      storage = storage ? JSON.parse(storage) : {}
      storage[this.onboardingKey] = this.isVisible
      localStorage.setItem(ONBOARDING_VISIBLE, JSON.stringify(storage))
    }
  }
}
