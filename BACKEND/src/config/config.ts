import dotenv from 'dotenv';

dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 5678;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const DB = {
    HOST: 'localhost',
    USER: 'postgres',
    PASSWORD: 'postgres',
    DB: 'Invoice',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

const config = {
    server: SERVER,
    db: DB
};

export default config;
