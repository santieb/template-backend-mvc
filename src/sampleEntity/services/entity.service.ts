import { ErrorObject } from '../../shared/helpers/error'
import { Entity } from '../types-interfaces/entity.type'

const sample = async ({ title, description } : Entity) => {
  if (!title || !description) throw new ErrorObject('data invalid', 400)

  return { title, description }
}

export default { sample }
