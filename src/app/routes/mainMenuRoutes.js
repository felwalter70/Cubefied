import { Router } from 'express';
import MainMenuController from '../controllers/MainMenuController';

const routes = new Router();

routes.get('/', MainMenuController.index);

export default routes;
