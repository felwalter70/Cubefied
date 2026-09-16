import { Router } from 'express';

import mainMenuRoutes from './mainMenuRoutes';
import mapSeletionRoutes from './mapSelectionRoutes';
import gameMatchRoutes from './gameMatchRoutes';

const routes = new Router();

// Default route
routes.get('/', (req, res) => {
    res.redirect('/mainMenu');
});

routes.use('/mainMenu', mainMenuRoutes);
routes.use('/mapSelection', mapSeletionRoutes);
routes.use('/gameMatch', gameMatchRoutes);

export default routes;
