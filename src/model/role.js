'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('roles', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    ApplicationId: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN,
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE
  }, {});
  Role.associate = function(models) {
    Role.belongsTo(models.applications, {foreignKey: 'applicationId', as: 'applications'})
  };
  return Role;
  
};

