const fs = require('fs');
const path = require('path');
const cls = require('cls-hooked');
const Sequelize = require('sequelize');

const { env } = require('../../config');

const pathConfig = path.join(__dirname, '../../config/db.js');
const config = require(pathConfig)[env];

const clsNamespace = cls.createNamespace('transactions-namespace');
Sequelize.useCLS(clsNamespace);

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const basename = path.basename(__filename);
const files = fs.readdirSync(__dirname);
const modelsPath = files.filter(
  file => /.js$/.test(file) && file !== basename
);

const db = {};

for (let modelPath of modelsPath) {
  modelPath = path.join(__dirname, modelPath);
  const model = require(modelPath);
  db[model.name] = model.init(sequelize, Sequelize);
}

async function transaction(task) {
  // NOTE SQLITE can have only 1 active transaction
  return clsNamespace.get('transactions-namespace')
    ? task()
    : sequelize.transaction(task);
}

Object.values(db)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(db));

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.transaction = transaction;

module.exports = db;