import { Router } from 'express'
import entityCtrl from './controllers/entity.controller'
const router = Router()

router
  .post('/create', entityCtrl.sample)

export default router
