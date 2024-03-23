import AButton from '../../Atoms/AButton'
import MFormGroup from '../../Molecules/MFormGroup'
import OFormGroupButtonCollection from './lib/OFormGroupButtonCollection'

export default {
  name: 'OFormGroupButtons',

  props: {
    buttons: {
      type: Object,
      validator: function (value) {
        return value instanceof OFormGroupButtonCollection
      }
    }
  },

  components: {
    AButton,
    MFormGroup
  },

  methods: {
    click (value) {
      this.$emit('click', value)
    }
  }
}
