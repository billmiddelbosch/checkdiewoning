export default {
  name: 'Link',

  props: {

    // Size/importance of the heading. Uses HTML headings h1-h6.
    size: {
      default: 'normal',
      type: String,
      validator: value => {
        return ['extrasmall', 'small', 'normal', 'large'].indexOf(value) !== -1
      }
    },
    href: {
      type: String,
      default: null,
      required: false
    },
    to: {
      default: null,
      type: Object
    },
    title: {
      type: String,
      default: null,
      required: false
    },
    target: {
      type: String,
      default: null,
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    underline: {
      type: Boolean,
      default: true,
      required: false
    }
  },

  computed: {

    // Return an object containing all active classes
    $_classes () {
      const baseClass = 'a-link'

      return {
        [baseClass]: true,
        [`${baseClass}--${this.size}`]: true,
        [`${baseClass}--disabled`]: this.disabled,
        [`${baseClass}--underline`]: this.underline
      }
    }
  },
  methods: {
    click () {
      if (!this.disabled) {
        if (this.to) {
          this.$router.push(this.to)
        }

        if (this.href) {
          if (this.target) {
            window.open(this.href, this.target)
          } else {
            window.location.href = this.href
          }
        }

        this.$emit('click', true)
      }
    }
  }
}
