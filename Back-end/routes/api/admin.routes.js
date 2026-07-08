import { Router } from 'express';
import {
	getInfo,
	createInfo,
	updateInfo,
	deleteInfo,
} from '../../controller/info.controller.js';
import {
	getLideres,
	createLider,
	updateLider,
	deleteLider,
} from '../../controller/lideres.controller.js';
import { uploadLider } from '../../middlewares/uploadLider.js';
import {
	getAllImages,
	createImage,
	deleteImage,
} from '../../controller/galeria.controller.js';
import { uploadGaleria } from '../../middlewares/uploadGaleria.js';
import { authMiddleware } from '../../middlewares/auth.middleware.js';

const router = Router();


router.use(authMiddleware);


router.get('/info', getInfo);
router.post('/info', createInfo);
router.put('/info/:id', updateInfo);
router.delete('/info/:id', deleteInfo);


router.get('/lideres', getLideres);
router.post('/lideres', uploadLider, createLider);
router.put('/lideres/:id', uploadLider, updateLider);
router.delete('/lideres/:id', deleteLider);

router.get('/galeria', getAllImages);
router.post('/galeria', uploadGaleria, createImage);
router.delete('/galeria/:id', deleteImage);

export default router;
