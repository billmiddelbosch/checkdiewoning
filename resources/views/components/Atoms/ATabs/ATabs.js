export default {
  name: 'ATabs',

  props: {
  },

  computed: {
  },

  data () {
    return {
      tabs: []
    }
  },

  mounted () {
    this.$_getTabs()
  },

  methods: {

    // Get all children that are tab components.
    $_getTabs () {
      this.$children.forEach(component => {
        if (component.$options.name === 'ATab') {
          this.tabs.push(component)
        }
      })
    },

    // Set specified tab as active.
    setActive (tabIndex) {
      this.tabs.forEach(tab => {
        tab.setActive(false)
      })

      this.tabs[tabIndex].setActive(true)
      this.$emit('change-parent', {
        index: tabIndex,
        title: this.tabs[tabIndex].label
      })
    }
  }
}
