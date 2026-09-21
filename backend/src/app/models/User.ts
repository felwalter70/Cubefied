import { DataTypes, Model, Sequelize, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare email: string;
    declare password_hash: string;

    static initModel(sequelize: Sequelize) {
        User.init(
            {
                id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
                name: DataTypes.STRING,
                email: DataTypes.STRING,
                password_hash: DataTypes.STRING,
            },
            {
                sequelize,
                tableName: 'users',
            },
        );
        return User;
    }
}
