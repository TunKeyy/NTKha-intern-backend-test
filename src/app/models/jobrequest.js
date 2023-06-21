'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      JobRequest.belongsTo(models.Store, { foreignKey: 'store_id', targetKey: 'id', as: 'store' });
      JobRequest.belongsTo(models.User, { foreignKey: 'freelancer_id', targetKey: 'id', as: 'user' });
    }
  }
  JobRequest.init({
    store_id: DataTypes.INTEGER,
    freelancer_id: DataTypes.INTEGER,
    request_type: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'JobRequest',
  });
  return JobRequest;
};