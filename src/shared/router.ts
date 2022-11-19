import { Router } from 'express'
import authRoutes from '../sampleEntity/entity.routes'

const router = Router()

router.use('/entity', authRoutes)

export default router
