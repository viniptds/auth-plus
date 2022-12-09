'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClaimGranted = sequelize.define('claimsGranted', {
    id: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    applicationId: DataTypes.INTEGER,
    roleClaimId: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN,
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE
  }, {});
  ClaimGranted.associate = function(models) {
    ClaimGranted.belongsTo(models.User, {foreignKey: 'userId', as: 'users'}),
    ClaimGranted.belongsTo(models.Application, {foreignKey: 'applicationId', as: 'applications'}),
    ClaimGranted.belongsTo(models.RoleClaim, {foreignKey: 'rolesClaimsId', as: 'rolesClaims'})
  };
  return Application;
};