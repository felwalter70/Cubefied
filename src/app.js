import express from 'express';
import routes from './app/routes';
import { engine } from 'express-handlebars';
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
        this.views();
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use(express.static('public'));
    }

    routes() {
        this.server.use(routes);
    }

    views() {
        this.server.engine('handlebars', engine({
            defaultLayout: 'main',
            layoutsDir: path.resolve(__dirname, 'app', 'views', 'layouts'),
        }));
        this.server.set('view engine', 'handlebars');

        this.server.set('views', path.resolve(__dirname, 'app', 'views'));
    }
}

export default new App().server;
