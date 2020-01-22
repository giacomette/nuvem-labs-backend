const config = require('./index');

const db = {
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  dialect: 'mysql'
}

const configEnvDB = {
  development: db,
  test: db,
  production: db
}

module.exports = configEnvDB;