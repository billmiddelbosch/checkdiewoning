import Model from '../../../../lib/Model/Model'

class OAlertModel extends Model {
  constructor (o) {
    super(o, [
      'body',
      'icon',
      'isClosable',
      'title',
      'type'
    ])
  }
}

export default OAlertModel
