'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contract extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Contract.belongsTo(models.Store, { foreignKey: 'store_id', targetKey: 'id', as: 'store' });
      Contract.belongsTo(models.User, { foreignKey: 'freelancer_id', targetKey: 'id', as: 'user' });
    }
  }
  Contract.init({
    store_id: DataTypes.INTEGER,
    freelancer_id: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Contract',
  });
  return Contract;
};