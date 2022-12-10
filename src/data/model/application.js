'use strict';
module.exports = (sequelize, DataTypes) => {
  const Application = sequelize.define('applications', {
    name: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    email: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE
  }, {});

  Application.associate = function (models) {
    Application.hasMany(models.roles, { as: 'roles' })
    Application.belongsToMany(models.users, {through: 'applicationsUsers', foreignKey: 'applicationId', as: 'users'})
    
  };
  
  return Application;
};