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

const router = Router();

// Middleware para verificar si está logueado
const requireAuth = (req, res, next) => {
	if (req.session && req.session.user) {
		return next();
	} else {
		return res.status(401).json({ message: 'No autorizado' });
	}
};

router.use(requireAuth);

// Rutas para administrar info
router.get('/info', getInfo);
router.post('/info', createInfo);
router.put('/info/:id', updateInfo);
router.delete('/info/:id', deleteInfo);

// Rutas para administrar lideres
router.get('/lideres', getLideres);
router.post('/lideres', uploadLider, createLider);
router.put('/lideres/:id', uploadLider, updateLider);
router.delete('/lideres/:id', deleteLider);



export default router;
