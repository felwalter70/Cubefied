import { User } from '../models/User';
import { CreationAttributes } from 'sequelize';

class UsersRepository {
    async getAll() {
        return await User.findAll();
    }

    async register(userData: CreationAttributes<User>) {
        return User.create(userData);
    }
}

export default new UsersRepository();
