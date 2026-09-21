import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import UsersService from '../services/UsersService';
import { IUser, IUserAcessParams } from '../interfaces/UserInterfaces';

class UsersController {
    async index(req: Request, res: Response): Promise<Response> {
        const users = await UsersService.getAll();

        return res.status(StatusCodes.OK).json(users);
    }

    async show(req: Request<IUserAcessParams, unknown, unknown>, res: Response): Promise<Response> {
        const user = await UsersService.getById(req.params.id);

        return res.status(StatusCodes.OK).json(user);
    }

    async create(req: Request<unknown, unknown, IUser>, res: Response): Promise<Response> {
        const user = await UsersService.register(req.body);

        return res.status(StatusCodes.CREATED).json(user);
    }

    async update(req: Request<IUserAcessParams, unknown, IUser>, res: Response): Promise<Response> {
        const updatedUser = await UsersService.update(req.body, req.params.id);

        return res.status(StatusCodes.OK).json(updatedUser);
    }

    async destroy(req: Request<IUserAcessParams, unknown, unknown>, res: Response): Promise<Response> {
        await UsersService.delete(req.params.id);

        return res.status(StatusCodes.NO_CONTENT).json();
    }
}

export default new UsersController();
