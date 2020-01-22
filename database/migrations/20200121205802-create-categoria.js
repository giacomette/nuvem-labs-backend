module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Categorias', {
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
      },
      createdAt: { 
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE
      }
    })
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Categorias')
  }
}