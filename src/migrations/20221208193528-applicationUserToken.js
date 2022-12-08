'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    return queryInterface.createTable('applicationUserToken', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.INTEGER
      },
      token: {
        type: Sequelize.DataTypes.STRING,
      },
      applicationUserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // WorkingDays hasMany Users n:n
          model: 'applicationUser',
          key: 'id'
        },
      },
      active: {
        type: Boolean,
        allowNull: false
      },
      updatedAt: Sequelize.DataTypes.DATE,
      createdAt: Sequelize.DataTypes.DATE
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('applicationUserToken');
  }
};
