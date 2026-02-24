import { Router } from 'express'
import { getImageMinisterio } from '../../controller/galeria.controller.js'

const router = Router()

router.get('/:ministerio', getImageMinisterio)

export default router 