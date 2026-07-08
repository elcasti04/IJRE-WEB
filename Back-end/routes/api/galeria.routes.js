import { Router } from 'express'
import { createImage, deleteImage, getAllImages } from '../../controller/galeria.controller.js'
import { uploadGaleria } from '../../middlewares/uploadGaleria.js'
import galeriaMinisterio from './galeria-min.routes.js'

const router = Router()

router.get('/', getAllImages)
router.post('/', uploadGaleria, createImage)
router.delete('/:id', deleteImage)
router.use('/ministerios', galeriaMinisterio)

export default router