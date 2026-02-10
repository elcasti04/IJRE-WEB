import { Router } from 'express';
import videoController from '../../controller/video.controler.js';

const router = Router();

router.get('/', videoController);

export default router;
