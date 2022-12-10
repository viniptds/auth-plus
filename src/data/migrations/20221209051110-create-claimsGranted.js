'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('claimsGranted', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {  
          model: 'users',
          key: 'id'
        }
      },
      applicationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {    
          model: 'applications',
          key: 'id'
        }
      },
      roleClaimId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {  
          model: 'rolesClaims',
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
    return queryInterface.dropTable('claimsGranted');
  }
};
