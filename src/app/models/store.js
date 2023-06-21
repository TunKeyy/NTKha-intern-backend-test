'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Store.belongsTo(models.User, { foreignKey: 'owner_id', targetKey: 'id', as: 'owner' });
      Store.hasMany(models.Contract, { foreignKey: 'store_id' });
      Store.hasMany(models.JobRequest, { foreignKey: 'store_id' });
    }
  }
  Store.init({
    owner_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    logo: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Store',
  });
  return Store;
};