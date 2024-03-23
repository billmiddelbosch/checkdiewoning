import OFilterListOptionModel from './OFilterListOptionModel'

class OFilterListModel {
  data = {
    id: null,
    label: null,
    type: 'checkbox',
    options: []
  }

  constructor (obj) {
    for (const i in obj) {
      if (Object.prototype.hasOwnProperty.call(this.data, i)) {
        this.data[i] = obj[i]
      }
    }
  }

  _appendData (a, field, Model = null) {
    a.forEach(obj => {
      const newObj = Model ? new Model(obj) : obj
      this.data[field].push(newObj)
    })
  }

  appendOptions (a) {
    this._appendData(a, 'options', OFilterListOptionModel)
  }
}

export default OFilterListModel
