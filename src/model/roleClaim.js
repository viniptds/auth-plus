'use strict';
module.exports = (sequelize, DataTypes) => {
  const RoleClaim = sequelize.define('rolesClaims', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    roleId: DataTypes.INTEGER,
    claimId: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN,
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE
  }, {});
  RoleClaim.associate = function (models) {
    RoleClaim.belongsTo(models.Role, { foreignKey: 'roleId' })
    RoleClaim.belongsTo(models.Claim, { foreignKey: 'claimId' }),
    RoleClaim.hasMany(models.claimGranted, { as: 'claimsGranted' })
};
  return Claim;
};