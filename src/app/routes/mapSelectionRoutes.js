import { Router } from 'express';

import MapSelectionController from '../controllers/MapSelectionController';

const routes = new Router();

routes.get('/', MapSelectionController.index);

export default routes;
