'use strict';
module.exports = (sequelize, DataTypes) => {
    const ApplicationUser = sequelize.define('applicationsUsers', {
        userId: DataTypes.INTEGER,
        applicationId: DataTypes.INTEGER,
        token: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
        updatedAt: DataTypes.DATE,
        createdAt: DataTypes.DATE
    }, {});
    ApplicationUser.associate = function (models) {
        ApplicationUser.belongsTo(models.users, {foreignKey: 'userId', as: 'users' })
        ApplicationUser.belongsTo(models.applications, { foreignKey: 'applicationId', as: 'application' })
    };
    return ApplicationUser;
};