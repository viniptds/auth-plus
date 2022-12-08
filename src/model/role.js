'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: DataTypes.INTEGER,
    description: DataTypes.INTEGER,
  }, {});
  return Role;
};

