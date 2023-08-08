'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class statuses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  statuses.init({
    fkey: DataTypes.INTEGER,
    name: DataTypes.STRING,
    module: DataTypes.STRING,
    bgcolor: DataTypes.STRING,
    fontcolor: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'statuses',
  });
  return statuses;
};