import AIcon from '../../Atoms/AIcon'

export default {
  name: 'Sorting',

  props: {

    // Sorting order.
    order: {
      default: null,
      type: String
    }
  },

  components: {
    AIcon
  },

  data () {
    return {
      iconMapping: [
        {
          order: 'asc',
          icon: 'arrow-down'
        },
        {
          order: 'desc',
          icon: 'arrow-up'
        },
        {
          order: null,
          icon: 'arrow-down-up'
        }
      ]
    }
  },

  computed: {

    // Return an object containing all active classes
    $_classes () {
      const baseClass = 'm-sorting'

      return {
        [baseClass]: true,
        [`${baseClass}--active`]: this.isActive
      }
    },

    // Get icon based on order.
    $_icon () {
      let icon = null
      this.$_loopIcons(item => {
        icon = item.icon
      })
      return icon
    },

    isActive () {
      return !(this.order + '' === 'null')
    }
  },

  methods: {

    // click event.
    $_click () {
      this.$emit('change', this.$_nextOrder())
    },

    // Change the sorting order.
    $_nextOrder () {
      let newOrder = null

      this.$_loopIcons((item, index) => {
        const newIndex = index !== (this.iconMapping.length - 1)
          ? (index + 1)
          : 0
        newOrder = this.iconMapping[newIndex].order
      })

      return newOrder
    },

    // Loop through all icons.
    $_loopIcons (callback) {
      this.iconMapping.every((item, index) => {
        if (item.order === this.order) {
          callback(item, index)
          return false
        }
        return true
      })
    }
  }
}
