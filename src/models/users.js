'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user_roles, {
        foreignKey: 'id_user_role',
        as: 'user_role',
      })

      this.belongsTo(models.statuses, {
        foreignKey: 'status',
        as: 'user_status',
      })
    }
  }
  users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    bod: DataTypes.DATEONLY,
    email_verified_at: DataTypes.DATE,
    password: DataTypes.STRING,
    id_user_role: DataTypes.INTEGER,
    two_factor_secret: DataTypes.TEXT,
    two_factor_recovery_codes: DataTypes.TEXT,
    remember_token: DataTypes.STRING,
    current_team_id: DataTypes.BIGINT,
    profile_photo_path: DataTypes.STRING,
    status: DataTypes.TINYINT,
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'users',
    timestamps: false,
    underscored: true,
  });
  return users;
};