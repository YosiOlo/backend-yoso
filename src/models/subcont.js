'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subcont extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  subcont.init({
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    kab_kota: DataTypes.STRING,
    telp: DataTypes.STRING,
    fax: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'subcont',
    timestamps: false,
    underscored: true,
    freezeTableName: true,
  });
  return subcont;
};