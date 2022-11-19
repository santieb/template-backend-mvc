import { Request, Response } from 'express'
import sucessResponse from '../../shared/helpers/sucessResponse'
import entityService from '../services/entity.service'

const sample = async ({ body }: Request, res: Response) => {
  try {
    const { title, description } = body
    const response = await entityService.sample({ title, description })

    sucessResponse({
      res,
      status: 200,
      message: 'sample',
      data: response
    })
  } catch (err) {
    res.status(400).send(err)
  }
}

export default { sample }
