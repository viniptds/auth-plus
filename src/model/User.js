'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.Application, {through: 'ApplicationsUsers', foreignKey: 'userId', as: 'Applications'}),
    User.hasMany(models.claimGranted, { as: 'claimsGranted' })
  };
  return User;
};