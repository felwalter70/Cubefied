import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Customer from '../app/models/Customer';
import Contact from '../app/models/Contact';
import User from '../app/models/User';

const models = [Customer, Contact, User];

class Database {
    constructor() {
        this.conection = new Sequelize(databaseConfig);

        this.init();
    }

    init() {
        models.forEach(model => {
            model.init(this.conection);
        });
    }
}

export default new Database();
