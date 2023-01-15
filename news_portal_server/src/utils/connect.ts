import config from 'config';
import mongoose from 'mongoose';
import logger from './logger';

// function to connect to the database
async function connect() {
    const dbAddress = config.get<string>('dbAddress');
    try {
        await mongoose.connect(dbAddress);
        logger.info('connection with database established');
    } catch (er) {
        logger.error('connection with database failed');
        process.exit(1);
    }
}

export default connect;