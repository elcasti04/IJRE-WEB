import { Router } from 'express';
import {
	getInfo,
	createInfo,
	updateInfo,
	deleteInfo,
} from '../../controller/info.controller.js';

const router = Router();

router.get('/', getInfo);
router.post('/', createInfo);
router.put('/:id', updateInfo);
router.delete('/:id', deleteInfo);

export default router;
