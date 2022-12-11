'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClaimGranted = sequelize.define('claimsGranted', {
    userId: DataTypes.INTEGER,
    applicationId: DataTypes.INTEGER,
    roleClaimId: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN,
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE
  }, {});
  ClaimGranted.associate = function(models) {
    ClaimGranted.belongsTo(models.users, {foreignKey: 'userId', as: 'users'}),
    ClaimGranted.belongsTo(models.applications, {foreignKey: 'applicationId', as: 'applications'}),
    ClaimGranted.belongsTo(models.rolesClaims, {foreignKey: 'rolesClaimsId', as: 'rolesClaims'})
  };
  return ClaimGranted;
};