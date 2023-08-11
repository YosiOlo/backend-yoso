'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class suplier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  suplier.init({
    nama: DataTypes.STRING,
    fax: DataTypes.STRING,
    alamat: DataTypes.STRING,
    kontak: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'suplier',
    timestamps: false,
    underscored: true,
    freezeTableName: true,
  });
  return suplier;
};