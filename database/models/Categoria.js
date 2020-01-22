const Sequelize = require('sequelize');

class Categoria extends Sequelize.Model {

  static init(sequelize, DataTypes) {

    return super.init({
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        autoIncrement: false
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING
      }
    }, {
      sequelize,
      tableName: 'Categorias',
      paranoid: true
    })
  }
}


module.exports = Categoria;