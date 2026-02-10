import { Router } from 'express';
import { contacto } from '../../controller/contacto.controller.js';

const router = Router();

router.get('/', contacto);

export default router;
