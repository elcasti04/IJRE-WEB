import { Router } from 'express';
import inicio from '../../controller/inicio.controller.js';

const router = Router();

router.get('/', inicio);

export default router;
