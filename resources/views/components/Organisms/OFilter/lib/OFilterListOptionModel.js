class OFilterListOptionModel {
  isChecked
  isDisabled
  label
  value

  constructor (obj) {
    for (const i in obj) {
      if (Object.prototype.hasOwnProperty.call(this, i)) {
        this[i] = obj[i]
      }
    }
  }
}

export default OFilterListOptionModel
