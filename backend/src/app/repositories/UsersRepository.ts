import { User } from '../models/User';
import { CreationAttributes, Attributes } from 'sequelize';

type UpdateAttributes = Partial<Attributes<User>>;

class UsersRepository {
    async getAll() {
        return await User.findAll();
    }

    async getById(id: string) {
        return await User.findByPk(id);
    }

    async register(userData: CreationAttributes<User>) {
        return await User.create(userData);
    }

    async updateById(updateData: UpdateAttributes, id: string) {
        await User.update(updateData, { where: { id } });
    }

    async deleteById(id: string) {
        User.destroy({ where: { id } });
    }
}

export default new UsersRepository();
