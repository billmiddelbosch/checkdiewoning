export default {
  name: 'ATab',

  props: {

    // The title of the tab.
    title: {
      required: true,
      type: String
    },

    // Whether or not this tab is active.
    isActive: {
      default: false,
      type: Boolean
    }
  },

  data () {
    return {
      isVisible: false
    }
  },

  mounted () {
    this.setActive(this.isActive)
  },

  computed: {
    label () {
      return this.title
    }
  },

  methods: {

    // Set this tab as active.
    setActive (bool) {
      this.isVisible = bool
    }
  },

  watch: {
    isActive () {
      this.setActive(this.isActive)
    }
  }
}
