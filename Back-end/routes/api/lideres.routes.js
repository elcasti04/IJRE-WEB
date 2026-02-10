import { Router } from 'express';

import {
	getLideres,
	getOneLider,
	createLider,
	updateLider,
	deleteLider,
} from '../../controller/lideres.controller.js';
import { uploadLider } from '../../middlewares/uploadLider.js';

const router = Router();

router.get('/', getLideres);
router.get('/:id', getOneLider);

router.post('/', uploadLider, createLider);
router.put('/:id', uploadLider, updateLider);

router.delete('/:id', deleteLider);

export default router;
