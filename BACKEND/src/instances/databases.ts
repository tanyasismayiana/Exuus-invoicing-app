import config from '../config/config';
import { Sequelize } from 'sequelize';

export default new Sequelize({
    dialect: 'postgres',
    host: config.db.HOST,
    database: config.db.DB,
    username: config.db.USER,
    password: config.db.PASSWORD
});
