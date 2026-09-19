import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import UsersService from '../services/UsersService';
import { UserInterface } from '../interfaces/UserInterface';
import { AppError } from '../errors/AppError';

class UsersController {
    async index(req: Request, res: Response): Promise<Response> {
        try {
            const users = await UsersService.getAll();

            return res.status(StatusCodes.OK).json(users);
        }
        catch (erro) {
            console.error(erro);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(erro);
        }
    }

    async create(req: Request<Record<string, unknown>, unknown, UserInterface>, res: Response): Promise<Response> {
        const user = await UsersService.register(req.body);
        return res.status(StatusCodes.CREATED).json(user);
    }
}

export default new UsersController();
