import OFilterListModel from './OFilterListModel'

class OFilterModel {
  data = {
    chips: [],
    isCollapsed: false,
    submit: {
      label: null,
      size: 'sm',
      type: 'outline'
    },
    columnWidth: 2,
    lists: [],
    labelClose: null,
    labelShowFilters: null
  }

  _updateObjectValue (k, v, field, allowNull = true) {
    this.data[field][k] = (allowNull && !v) || v ? v : this.data[field][k]
  }

  _updateObject (obj, field, allowNull = true) {
    for (const key in obj) {
      this._updateObjectValue(key, obj[key], field, allowNull)
    }
  }

  appendList (o) {
    const newList = new OFilterListModel(o)
    this.data.lists.push(newList)
    return newList
  }

  replaceArray (a, field) {
    this.data[field].splice(0, this.data.length)

    a.forEach(o => {
      this.data[field].push(o)
    })
  }

  set chips (a) {
    this.replaceArray(a, 'chips')
  }

  set isCollapsed (bool) {
    this.data.isCollapsed = bool
  }

  set submit (obj) {
    this._updateObject(obj, 'submit')
  }

  set columnWidth (num) {
    this.data.columnWidth = num
  }

  set labelClose (str) {
    this.data.labelClose = str
  }

  set labelShowFilters (str) {
    this.data.labelShowFilters = str
  }
}

export default OFilterModel
