'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('claims', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.DataTypes.STRING,
      },
      description: {
        type: Sequelize.DataTypes.STRING,
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

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('claims');
  }
};
