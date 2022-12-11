'use strict';
module.exports = (sequelize, DataTypes) => {
  const Claim = sequelize.define('claims', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE
  }, {});
  Claim.associate = function(models) {
    Claim.belongsToMany(models.roles, {through: 'rolesClaims', foreignKey: 'claimId', as: 'roles'})
  };
  return Claim;
};