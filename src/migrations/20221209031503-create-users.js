'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      active: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false
      },
      updatedAt:
      {
        type: Sequelize.DataTypes.DATE,
      },
      createdAt:
      {
        type: Sequelize.DataTypes.DATE,
      }
    });

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};
