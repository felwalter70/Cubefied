import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';

import { User } from '../app/models/User';

const models = [
    User,
];

class Database {
    public connection: Sequelize;

    constructor() {
        this.connection = new Sequelize(databaseConfig);

        this.init();
        // this.associate();
    }

    init() {
        models.forEach(model => {
            model.initModel(this.connection);
        });
    }

    associate() {
        models.forEach(model => {
            model.associate?.(this.connection.models);
        });
    }
}

export default new Database();
