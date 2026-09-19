import 'dotenv/config';
import app from './app';

import database from './database';

async function start() {
    try {
        await database.connection.authenticate();

        app.listen(process.env.PORT, () => {
            console.log('Server started');
        });
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
}

start();
