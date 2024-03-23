import Model from '../../../../lib/Model/Model'

class OFormGroupButtonModel extends Model {
  constructor (o) {
    super(o, [
      'id',
      'label',
      'type',
      'isSubmit'
    ])
  }
}

export default OFormGroupButtonModel
