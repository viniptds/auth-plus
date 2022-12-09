'use strict';
module.exports = (sequelize, DataTypes) => {
    const ApplicationUser = sequelize.define('ApplicationsUsers', {
        userId: DataTypes.INTEGER,
        applicationId: DataTypes.INTEGER,
        token: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
        updatedAt: DataTypes.DATE,
        createdAt: DataTypes.DATE
    }, {});
    ApplicationUser.associate = function (models) {
        ApplicationUser.belongsTo(models.User, { foreignKey: 'userId' })
        ApplicationUser.belongsTo(models.Aplication, { foreignKey: 'applicationId' })
    };
    return ApplicationUser;
};