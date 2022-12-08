'use strict';
module.exports = (sequelize, DataTypes) => {
    const ApplicationUser = sequelize.define('UsersWorkingDay', {
        userId: DataTypes.INTEGER,
        applicationId: DataTypes.INTEGER,
    }, {});
    ApplicationUser.associate = function (models) {
        ApplicationUser.belongsTo(models.User, { foreignKey: 'userId' })
        ApplicationUser.belongsTo(models.Aplication, { foreignKey: 'applicationId' })
    };
    return ApplicationUser;
};