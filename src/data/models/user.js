'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.applications, {through: 'applicationsUsers', foreignKey: 'userId', as: 'Applications'}),
    User.hasMany(models.claimsGranted, { as: 'claimsGranted' })
  };
  return User;
};