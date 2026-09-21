import UsersRepository from '../repositories/UsersRepository';

import * as Yup from 'yup';
import bcrypt from 'bcrypt';
import { AppError } from '../errors/AppError';
import { StatusCodes } from 'http-status-codes';

import { IUser, IUserUpdate } from '../interfaces/UserInterfaces';

const createSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
});

const updateSchema = Yup.object().shape({
    name: Yup.string().notRequired(),
    email: Yup.string().email().notRequired(),
    password: Yup.string().min(6).notRequired(),
});

class UsersService {
    async getAll() {
        return await UsersRepository.getAll();
    }

    async getById(id: string) {
        return await UsersRepository.getById(id);
    }

    async register(userData: IUser) {
        if (!(await createSchema.isValid(userData)))
            throw new AppError('Request BODY is invalid', StatusCodes.BAD_REQUEST);

        const senhaProvisoria = Math.random().toString(36).slice(2);
        const passwordHash = await bcrypt.hash(senhaProvisoria, 8);

        const user = await UsersRepository.register({ ...userData, password_hash: passwordHash });
        return user;
    }

    async update(updateData: IUserUpdate, id: string) {
        if (!(await updateSchema.isValid(updateData)))
            throw new AppError('Request BODY is invalid', StatusCodes.BAD_REQUEST);

        const dataToSave: IUserUpdate = { ...updateData };

        if (updateData.password) {
            dataToSave.password_hash = await bcrypt.hash(updateData.password, 8);
            delete dataToSave.password;
        }

        await UsersRepository.updateById(dataToSave, id);
        const updatedUser = await this.getById(id);

        if (!updatedUser) {
            throw new AppError('User not found', StatusCodes.NOT_FOUND);
        }

        return updatedUser;
    }

    async delete(id: string) {
        const userToDelete = await this.getById(id);

        if (!userToDelete) {
            throw new AppError('User not found', StatusCodes.NOT_FOUND);
        }

        await UsersRepository.deleteById(id);
    }
}

export default new UsersService();
