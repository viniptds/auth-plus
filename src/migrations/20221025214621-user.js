'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('user', { 
            id: { 
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true
            },
            email: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            token: {
                type: Sequelize.DataTypes.STRING
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

        await queryInterface.dropTable('user');

    }
};
