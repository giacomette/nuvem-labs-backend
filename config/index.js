require('dotenv').config();

const config = {};


config.env = process.env.NODE_ENV || 'development';


config.username = process.env.DB_USERNAME || 'root';
config.password = process.env.DB_PASSWORD || '';
config.database = process.env.DB_DATABASE || 'nuvemlab';
config.host = process.env.DB_HOST || '127.0.0.1';
config.port = process.env.DB_PORT || '3306';
 
module.exports = config;