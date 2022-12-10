'use strict';
module.exports = (sequelize, DataTypes) => {
  const RoleClaim = sequelize.define('rolesClaims', {
    name: DataTypes.STRING,
    roleId: DataTypes.INTEGER,
    claimId: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN,
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE
  }, {});
  RoleClaim.associate = function (models) {
    RoleClaim.belongsTo(models.roles, { foreignKey: 'roleId' })
    RoleClaim.belongsTo(models.claims, { foreignKey: 'claimId' }),
    RoleClaim.hasMany(models.claimsGranted, { as: 'claimsGranted' })
};
  return RoleClaim;
};