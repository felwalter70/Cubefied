import express from 'express';
import routes from './app/routes';
import cors from 'cors';
import { errorMiddleware } from './app/middlewares/ErrorMiddleware';

class App {
    public server: express.Express;

    constructor() {
        this.server = express();
        this.cors();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use(express.static('public'));

        // The error middleware is always the last one
        this.server.use(errorMiddleware);
    }

    routes() {
        this.server.use('/api', routes);
    }

    cors() {
        this.server.use(cors({
            origin: process.env.FRONTEND_ORIGIN,
        }));
    }
}

export default new App().server;
