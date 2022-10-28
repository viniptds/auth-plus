'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('users', { 
            id: { 
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true
            },
            token: {
                type: Sequelize.DataTypes.STRING
            },
            email: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            updatedAt: Sequelize.DataTypes.DATE,
            createdAt: Sequelize.DataTypes.DATE
        });

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.dropTable('users');

    }
};
