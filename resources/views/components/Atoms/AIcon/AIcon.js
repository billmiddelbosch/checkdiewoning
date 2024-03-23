import iconList from './icons.json'

export default {
  name: 'AIcon',

  props: {
    // A string containing the name of the icon
    // and validates with icon list from json
    icon: {
      required: true,
      type: String,
      validator: (name) => Object.keys(iconList).includes(name)
    },

    // Whether or not to use the parent's color attribute as fill color for
    // the svg
    isCurrentColor: {
      default: true,
      type: Boolean
    },

    // Add background to the icon
    hasBg: {
      default: false,
      type: Boolean
    },

    // The size of the svg
    size: {
      default: 'md',
      type: String,
      validator: value => {
        return [
          'xs',
          'sm',
          'md',
          'lg',
          'xl',
          'xxl'
        ].indexOf(value) !== -1
      }
    },

    viewBox: {
      default: '0 0 16 16',
      type: String
    }
  },

  computed: {
    $_wrapperClasses () {
      const classes = [
        'a-icon-wrapper',
        this.hasBg ? 'has-bg' : '',
        `is-${this.size}`
      ]
      return classes
    },

    // Return an array containing all active classes
    $_classes () {
      const classes = [
        'a-icon',
        ...[this.icon, this.size]
          .filter(Boolean)
          .map(prop => {
            return 'a-icon--' + prop
          })
      ]
      if (this.isCurrentColor) {
        classes.push('a-icon--current-color')
      }
      return classes
    },

    dPath () {
      return iconList[this.icon]
    }
  }
}
