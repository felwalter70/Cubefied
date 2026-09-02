import { Router } from 'express';

import mainMenuRoutes from './mainMenuRoutes';
import mapSeletionRoutes from './mapSelectionRoutes';

const routes = new Router();

routes.use('/main', mainMenuRoutes);
routes.use('/mapSelection', mapSeletionRoutes);

export default routes;
