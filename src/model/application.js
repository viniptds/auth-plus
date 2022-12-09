'use strict';
module.exports = (sequelize, DataTypes) => {
  const Application = sequelize.define('Applications', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    email: DataTypes.STRING,
    applicationId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    applicationUserTokenId: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN,
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE
  }, {});

  Application.associate = function (models) {
    Application.belongsToMany(models.User, {through: 'ApplicationsUsers', foreignKey: 'ApplicationId', as: 'Users'})
    Application.hasMany(models.Role, { as: 'roles' })
  };
  
  return Application;
};