import { Router } from 'express'
import { createImage, deleteImage, getAllImages } from '../../controller/galeria.controller.js'
import galeriaMinisterio from './galeria-min.routes.js'

const router = Router()

router.get('/', getAllImages)
router.post('/', createImage)
router.delete('/', deleteImage)
router.use('/ministerios', galeriaMinisterio)

export default router

