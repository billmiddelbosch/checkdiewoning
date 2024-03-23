import Model from '../../../../lib/Model/Model'

class MFormDescriptionModel extends Model {
  constructor (o) {
    super(o, [
      'hasTopMargin',
      'title',
      'body'
    ])
  }
}

export default MFormDescriptionModel
