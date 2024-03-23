import AButton from '../../Atoms/AButton'
import AButtonGroup from '../../Atoms/AButtonGroup'
import AIcon from '../../Atoms/AIcon'

export default {
  name: 'MPagination',

  props: {

    // The current page.
    page: {
      required: true,
      type: Number
    },

    // Total number of pages.
    total: {
      required: true,
      type: Number
    }
  },

  components: {
    AButton,
    AButtonGroup,
    AIcon
  },

  computed: {

    // Whether or not there are subsequent pages.
    $_hasNext () {
      return this.page < this.total
    },

    // Whether or not there are preceding pages.
    $_hasPrevious () {
      return this.page > 1
    },

    // Returns an array of the current, subsequent, and preceding pages.
    $_visiblePages () {
      const page = this.page > this.total ? this.total : this.page
      const before = page - 1
      const after = this.total - page

      const totalBefore = this.$_countRest(before, after)
      const totalAfter = this.$_countRest(after, before)

      return Array.from(
        new Array(totalBefore + totalAfter + 1),
        (val, index) => index + (page - totalBefore)
      )
    }
  },

  methods: {

    // Count the pages before or after the active page.
    $_countRest (a, b) {
      return a > 0 ? (a > 2 ? (b < 2 ? (a > 4 ? 4 : a) - b : 2) : a) : 0
    },

    // Selected the next page.
    $_next () {
      this.$_select(this.page + 1)
    },

    // Selected the last page.
    $_last () {
      this.$_select(this.total)
    },

    // Selected the previous page.
    $_previous () {
      this.$_select(this.page - 1)
    },

    // Selected the last page.
    $_first () {
      this.$_select(1)
    },

    // Selected a specific page.
    $_select (number) {
      this.$emit('change', number)
    }
  }
}
