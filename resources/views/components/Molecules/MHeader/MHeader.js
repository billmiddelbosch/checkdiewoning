import AHeading from '../../Atoms/AHeading'
import { AContainer, ARow, ACol } from '../../Atoms/AContainer'

export default {
  name: 'MHeader',

  props: {
    size: {
      default: 'h1',
      type: String,
      validator: value => {
        return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].indexOf(value) !== -1
      }
    },
    title: {
      default: null,
      type: String
    }
  },

  components: {
    AContainer,
    AHeading,
    ARow,
    ACol
  },

  computed: {
    $_classes () {
      const baseClass = 'm-header'

      return {
        [baseClass]: true,
        [`${baseClass}--${this.size}`]: this.size
      }
    }
  }
}
