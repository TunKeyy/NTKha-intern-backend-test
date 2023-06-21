'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Store, { foreignKey: 'store_id' });
      User.hasOne(models.Contract, { foreignKey: 'user_id' });
      User.hasMany(models.JobRequest, { foreignKey: 'user_id' });
    }
  }
  User.init({
    username: DataTypes.STRING,
    full_name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    gender: DataTypes.STRING,
    avatar: DataTypes.STRING,
    identify_code: DataTypes.STRING,
    address: DataTypes.STRING,
    is_verify: DataTypes.BOOLEAN,
    user_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};