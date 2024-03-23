export default {
  name: 'MDropdownItem',
  props: {
    linkMenuItemToChild: {
      default: false,
      type: Boolean,
      require: false
    },
    wrapItem: {
      default: false,
      type: Boolean,
      require: false
    },

    // Whether or not the dropdown is full width.
    isFullWidth: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    click () {
      this.$parent.toggleDropdown()
      this.$emit('click', true)
      if (this.linkMenuItemToChild) {
        this.$children[0].$el.click()
        this.$parent.hideMenu()
      }
    }
  },
  computed: {
    $_classes () {
      const baseClass = 'm-dropdownitem'
      const {
        isFullWidth
      } = this
      return {
        [`${baseClass}`]: true,
        [`${baseClass}__is-full-width`]: isFullWidth,
        wrapItem: this.wrapItem
      }
    }
  }
}
