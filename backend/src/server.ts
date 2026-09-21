import 'dotenv/config';
import app from './app';

import database from './database';

async function start() {
    try {
        await database.connection.authenticate();

        app.listen(Number(process.env.PORT), '0.0.0.0', () => {
            console.log('Server started');
        });
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
}

start();
