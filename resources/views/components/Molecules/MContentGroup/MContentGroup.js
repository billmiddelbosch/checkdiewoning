import AIcon from '../../Atoms/AIcon'
import AHeading from '@/components/Atoms/AHeading'

export default {
  name: 'MContentGroup',

  props: {

    // Whether or not the group is bordered.
    isBordered: {
      default: false,
      type: Boolean
    },

    // Whether or not the group is collapsed
    isCollapsed: {
      default: false,
      type: Boolean
    },

    // Whether or not the group is collapsible
    isCollapsible: {
      default: false,
      type: Boolean
    },

    // Whether or not the group uses the full width of the container.
    isFullwidth: {
      default: false,
      type: Boolean
    },

    hasShadow: {
      default: false,
      type: Boolean
    },

    bgColor: {
      default: null,
      type: String,
      validator: (val) => {
        const bgColors = [
          'white',
          'ui-1',
          'ui-2',
          'ui-3',
          'ui-4',
          'ui-5',
          'ui-6',
          'ui-7',
          'ui-8'
        ]
        return bgColors.includes(val)
      }
    },

    customBgColor: {
      default: null,
      type: String
    }
  },

  components: {
    AIcon,
    AHeading
  },

  data () {
    return {
      bodySlots: []
    }
  },

  mounted () {
    this.bodySlots = Object.keys(this.$scopedSlots).filter(slot => {
      return slot.match(new RegExp('^body-'))
    })
  },

  computed: {

    hasHeader () {
      return !!this.$slots['header-left'] === true || !!this.$slots['header-right'] === true || !!this.$slots.title === true
    },

    hasTItle () {
      return !!this.$slots.title === true
    },

    // Return an class containing all active classes.
    $_classes () {
      const baseClass = 'm-contentgroup'
      return {
        [`${baseClass}`]: true,
        [`${baseClass}--bg-${this.bgColor}`]: this.bgColor,
        [`${baseClass}--bordered`]: this.isBordered,
        [`${baseClass}--collapsible`]: this.isCollapsible,
        [`${baseClass}--fullwidth`]: this.isFullwidth,
        [`${baseClass}--shadowed`]: this.hasShadow
      }
    },

    // Toggle the icon.
    $_toggleIcon () {
      return 'chevron-' + (this.isCollapsed ? 'down' : 'up')
    },

    $_styles () {
      return { backgroundColor: this.customBgColor ? this.customBgColor : null }
    }
  },

  methods: {
    $_toggleCollapse () {
      this.$emit('toggle', !this.isCollapsed)
    }
  }
}
