import AIcon from '../../Atoms/AIcon'

export default {
  name: 'MDropdown',

  props: {
    label: {
      required: true,
      type: String
    },

    topLabel: {
      required: false,
      type: String
    },

    hasMouseOver: {
      type: Boolean,
      default: false
    },

    hideChevron: {
      type: Boolean,
      default: false
    },

    removeHeaderStyling: {
      type: Boolean,
      default: false
    },

    // Whether or not the dropdown is full width.
    isFullWidth: {
      default: false,
      type: Boolean
    },

    // Whether the dropdown has border
    hasBorder: {
      default: false,
      type: Boolean
    }

  },

  components: {
    AIcon
  },

  data () {
    return {
      isVisibleMenu: false
    }
  },

  methods: {
    toggleDropdown (e) {
      this.isVisibleMenu = !this.isVisibleMenu
    },
    close (e) {
      if (!this.$el.contains(e.target)) {
        this.isVisibleMenu = false
      }
    },
    hideMenu (e) {
      this.isVisibleMenu = false
    },
    handleMouseOver (e) {
      if (this.hasMouseOver) {
        this.isVisibleMenu = true
      }
    }
  },

  mounted () {
    document.addEventListener('click', this.close)

    if (this.hasMouseOver) {
      this.$el.addEventListener('mouseleave', this.hideMenu)
    }
  },

  beforeDestroy () {
    document.removeEventListener('click', this.close)
    if (this.hasMouseOver) {
      this.$el.removeEventListener('mouseout', this.hideMenu)
    }
  },

  computed: {
    $_classes () {
      const baseClass = 'm-dropdown'
      const {
        isFullWidth,
        hasBorder
      } = this
      return {
        [`${baseClass}__toggle`]: true,
        [`${baseClass}__is-full-width`]: isFullWidth,
        [`${baseClass}__has-border`]: hasBorder,
        'is-chevron-hidden': this.hideChevron,
        'has-no-headerStyles': this.removeHeaderStyling
      }
    },

    hasSlotHead () {
      return !!this.$slots.head
    }
  }
}
