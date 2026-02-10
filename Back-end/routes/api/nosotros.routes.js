import { Router } from 'express';

import { sobreNosotros } from '../../controller/nosotros.controller.js';

const router = Router();

router.get('/', sobreNosotros);

export default router;
