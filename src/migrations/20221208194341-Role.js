'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('role', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.INTEGER
      },
      applicationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'application',
          key: 'id'
        }
      },
      name: {
        type: Sequelize.DataTypes.STRING,
      },
      description: {
        type: Sequelize.DataTypes.STRING,
      },
      active: {
        type: Boolean,
        allowNull: false
      },
      updatedAt: Sequelize.DataTypes.DATE,
      createdAt: Sequelize.DataTypes.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('role');
  }
};
