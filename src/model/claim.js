'use strict';
module.exports = (sequelize, DataTypes) => {
  const Claim = sequelize.define('Claim', {
    name: DataTypes.INTEGER,
    description: DataTypes.INTEGER,
  }, {});
  return Claim;
};