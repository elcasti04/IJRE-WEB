import { Router } from 'express';
import videosRouter from './api/videos.routes.js';
import inicioRouter from './api/inicio.routes.js';
import infoRouter from './api/info.routes.js';
import lideresRouter from './api/lideres.routes.js';
import nosotrosRouter from './api/nosotros.routes.js';
import contactoRouter from './api/contacto.routes.js';
import loginRouter from './api/login.routes.js';
import adminRouter from './api/admin.routes.js';
import galeriaRoutes from './api/galeria.routes.js'

const router = Router();

router.use('/', inicioRouter);

router.use('/info', infoRouter);

router.use('/videos', videosRouter);

router.use('/lideres', lideresRouter);

router.use('/about', nosotrosRouter);

router.use('/contacto', contactoRouter);

router.use('/auth', loginRouter);

router.use('/admin', adminRouter);

router.use('/galeria', galeriaRoutes)




export default router;
