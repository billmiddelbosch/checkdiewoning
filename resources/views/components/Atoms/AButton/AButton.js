export default {
  name: 'AButton',

  props: {

    // The color of the button (either background, or outline).
    color: {
      default: 'orange-accessible',
      type: String
    },

    hasPadding: {
      default: true,
      type: Boolean
    },

    tooltip: {
      default: '',
      type: String
    },

    buttonBadge: {
      default: 0,
      type: Number
    },

    // The size of the button.
    size: {
      default: 'md',
      type: String,
      validator: value => {
        return [
          'xs',
          'sm',
          'md'
        ].indexOf(value) !== -1
      }
    },

    // Whether the button has a solid colored background, or an outline only.
    type: {
      default: 'solid',
      type: String,
      validator: value => {
        return [
          'solid',
          'outline',
          'icon'
        ].indexOf(value) !== -1
      },

      // Custom data-atrribute for testing
      testTag: {
        type: String,
        default: null
      },
    },

    to: {
      default: null,
      type: Object
    },
    href: {
      default: null,
      type: String
    },

    // Whether or not the button is active.
    isActive: {
      default: false,
      type: Boolean
    },

    // Whether or not the button is full width.
    isFullWidth: {
      default: false,
      type: Boolean
    },

    // Whether or not the button is centered.
    isCentered: {
      default: false,
      type: Boolean
    },

    // Whether or not the button is disabled.
    isDisabled: {
      default: false,
      type: Boolean
    },

    // Button without radios on left or right side.
    flatLeft: {
      default: false,
      type: Boolean
    },

    flatRight: {
      default: false,
      type: Boolean
    },

    isLoading: {
      default: false,
      type: Boolean
    },

    // Whether or not the button is meant to submit a form.
    isSubmit: {
      default: false,
      type: Boolean
    },
    shouldForceRefresh: {
      default: false,
      type: Boolean
    }
  },

  computed: {
    
    dataRtValue() {
      return this.testTag ? testTag : 'AButton';
    },

    // Return the type of button
    $_buttonType () {
      return this.isSubmit ? 'Submit' : 'Button'
    },

    // Return an object containing all active classes
    $_classes () {
      const baseClass = 'a-button'
      const {
        color,
        hasPadding,
        isActive,
        isCentered,
        size,
        type,
        isFullWidth,
        flatLeft,
        flatRight
      } = this

      return {
        [baseClass]: true,
        [`${baseClass}--${size}`]: true,
        [`${baseClass}--${type}`]: true,
        [`${baseClass}--${color}`]: true,
        [`${baseClass}--active`]: isActive,
        [`${baseClass}--has-padding`]: hasPadding,
        [`${baseClass}--is-full-width`]: isFullWidth,
        [`${baseClass}--is-centered`]: isCentered,
        [`${baseClass}--flat-left`]: flatLeft,
        [`${baseClass}--flat-right`]: flatRight
      }
    }
  },
  methods: {
    click () {
      if (this.to) {
        if (this.shouldForceRefresh) {
          const router = this.$router.resolve(this.to)
          window.open(router.href, '_parent')
        } else {
          this.$router.push(this.to)
        }
      }

      if (this.href) {
        window.location.href = this.href
        // window.open(this.href)
      }

      this.$emit('click', true)
    }
  }
}
