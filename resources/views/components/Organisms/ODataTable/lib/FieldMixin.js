import ODataTableFieldModel from '../lib/ODataTableFieldModel'

export default {
  props: {
    data: {
      default: null,
      type: Object
    },
    field: {
      required: true,
      type: Object,
      validator: function (value) {
        return value instanceof ODataTableFieldModel
      }
    }
  }
}
