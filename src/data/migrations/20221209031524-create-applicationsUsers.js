'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('applicationsUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      token: {
        type: Sequelize.DataTypes.STRING
      },
      applicationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'applications',
          key: 'id'
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
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
    return queryInterface.dropTable('applicationsUsers');
  }
};
