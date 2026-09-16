import { Router } from 'express';

import GameMatchController from '../controllers/GameMatchController';

const routes = new Router();

routes.get('/', GameMatchController.index);

export default routes;
