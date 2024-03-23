import Model from '../../../../lib/Model/Model'

class OContractModel extends Model {
  constructor (o) {
    super(o, [
      'address',
      'controlLabel',
      'controls',
      'email',
      'location',
      'name',
      'phone',
      'postalcode',
      'url'
    ])
  }
}

export default OContractModel
