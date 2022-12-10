'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('rolesClaims', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      roleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {  
          model: 'roles',
          key: 'id'
        }
      },
      claimId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {  
          model: 'claims',
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

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('rolesClaims');
  }
};
