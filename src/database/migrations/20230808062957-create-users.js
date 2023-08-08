'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      bod: {
        type: Sequelize.DATEONLY
      },
      email_verified_at: {
        type: Sequelize.DATE
      },
      password: {
        type: Sequelize.STRING
      },
      id_user_role: {
        type: Sequelize.INTEGER
      },
      two_factor_secret: {
        type: Sequelize.TEXT
      },
      two_factor_recovery_codes: {
        type: Sequelize.TEXT
      },
      remember_token: {
        type: Sequelize.STRING
      },
      current_team_id: {
        type: Sequelize.BIGINT
      },
      profile_photo_path: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.TINYINT
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      },
      deleted_at: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};