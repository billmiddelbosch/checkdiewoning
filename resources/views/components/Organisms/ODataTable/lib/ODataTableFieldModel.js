class ODataTableFieldModel {
  id
  callback
  label
  order
  isSortable = true
  type

  constructor (obj) {
    for (const i in obj) {
      if (Object.prototype.hasOwnProperty.call(this, i)) {
        this[i] = obj[i]
      }
    }
  }
}

export default ODataTableFieldModel
