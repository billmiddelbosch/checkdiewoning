import ODataTableFieldModel from './ODataTableFieldModel'

class ODataTableModel {
  data = {
    count: null,
    description: {
      title: null,
      body: null
    },
    fields: [],
    rows: [],
    hasTableHeading: true,
    isLoading: false,
    isVisible: true,
    pagination: {
      isVisible: true,
      page: 1,
      total: 1
    }
  }

  constructor (fields = [], rows = [], total = 1, page = 1) {
    this.appendFields(fields)
    this.appendRows(rows)
    this.pagination = { total, page }
  }

  get count () {
    return this.data.count
  }

  set count (str) {
    this.data.count = str
  }

  get hasTableHeading () {
    return this.data.hasTableHeading
  }

  set hasTableHeading (bool) {
    this.data.hasTableHeading = bool
  }

  get isLoading () {
    return this.data.isLoading
  }

  set isLoading (bool) {
    this.data.isLoading = bool
  }

  get isVisible () {
    return this.data.isVisible
  }

  set isVisible (bool) {
    this.data.isVisible = bool
  }

  _appendData (a, field, Model = null) {
    a.forEach(obj => {
      const newObj = Model ? new Model(obj) : obj
      this.data[field].push(newObj)
    })
  }

  _updateObjectValue (k, v, field, allowNull = true) {
    this.data[field][k] = (allowNull && !v) || v ? v : this.data[field][k]
  }

  _updateObject (obj, field, allowNull = true) {
    for (const key in obj) {
      this._updateObjectValue(key, obj[key], field, allowNull)
    }
  }

  appendFields (a) {
    this._appendData(a, 'fields', ODataTableFieldModel)
  }

  appendRows (a) {
    this._appendData(a, 'rows')
  }

  set description (obj) {
    this._updateObject(obj, 'description')
  }

  set pagination (obj) {
    this._updateObject(obj, 'pagination')
  }
}

export default ODataTableModel
