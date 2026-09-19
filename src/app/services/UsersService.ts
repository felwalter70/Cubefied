import { UserInterface } from '../interfaces/UserInterface';
import UsersRepository from '../repositories/UsersRepository';

import * as Yup from 'yup';
import bcrypt from 'bcrypt';
import { AppError } from '../errors/AppError';
import { StatusCodes } from 'http-status-codes';

const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
});

class UsersService {
    async getAll() {
        return await UsersRepository.getAll();
    }

    async register(userData: UserInterface) {
        if (!(await schema.isValid(userData)))
            throw new AppError('Request BODY is invalid', StatusCodes.BAD_REQUEST);

        const senhaProvisoria = Math.random().toString(36).slice(2);
        const passwordHash = await bcrypt.hash(senhaProvisoria, 8);

        const user = await UsersRepository.register({ ...userData, password_hash: passwordHash });
        return user;
    }
}

export default new UsersService();
