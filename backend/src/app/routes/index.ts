import { Router, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import usersRoutes from './usersRoutes';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    res.status(StatusCodes.OK).json({ hello: 'world' });
});

routes.use('/users', usersRoutes);

export default routes;
