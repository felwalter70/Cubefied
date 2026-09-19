import 'dotenv/config';
import type { Options } from 'sequelize';

export default {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    define: {
        timestamps: true,
        underscored: true,
    },
} satisfies Options;
