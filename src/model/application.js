'use strict';
module.exports = (sequelize, DataTypes) => {
  const Application = sequelize.define('Application', {
    applicationId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    applicationUserTokenId: DataTypes.INTEGER
  }, {});
  Application.associate = function (models) {
    Application.hasMany(models.Role, { as: 'role' })
    Application.belongsToMany(models.User, {through: 'ApplicationUser', foreignKey: 'ApplicationId', as: 'Users'})
  };
  return Application;
};