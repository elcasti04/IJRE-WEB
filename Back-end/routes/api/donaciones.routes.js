import { Router } from 'express';
import { donaciones } from '../../controller/donaciones.controller.js';

const router = Router();

router.get('/', donaciones);

export default router;
