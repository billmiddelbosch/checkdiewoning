export default {
  name: 'AVr',

  props: {

    // Horizontally align the vertical rule
    align: {
      default: 'center',
      type: String,
      validator: value => {
        return ['center', 'left', 'right'].indexOf(value) !== -1
      }
    },

    opacity: {
      type: Number,
      default: 0.25
    },

    // Custom color - Only accepts hexadecimal colors
    color: {
      default: 'currentColor',
      type: String,
      validator: (val) => {
        if (val === 'currentColor' || /^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(val)) {
          // Match
          return true
        } else {
          console.warn(`${val} is not a hexadecimal color`)
          return false
        }
      }
    }
  },

  computed: {

    // Return an object containing all active classes
    $_classes () {
      const baseClass = 'a-vr'

      return {
        [baseClass]: true,
        [`${baseClass}--align-${this.align}`]: true
      }
    },

    $_styles () {
      const styles = {
        opacity: this.opacity,
        'background-color': this.color
      }

      return styles
    }
  }
}
