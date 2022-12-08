'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('claimGranted', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {  
          model: 'user',
          key: 'id'
        }
      },
      applicationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {    
          model: 'application',
          key: 'id'
        }
      },
      roleClaimId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {  
          model: 'roleClaim',
          key: 'id'
        }
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
    return queryInterface.dropTable('claimGranted');
  }
};
