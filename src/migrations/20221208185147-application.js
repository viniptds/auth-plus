'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('application', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      cnpj: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
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
    return queryInterface.dropTable('application');
  }
};
