
'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.Application, {through: 'ApplicationUser', foreignKey: 'userId', as: 'Applications'})
  };
  return User;
};



// const { Sequelize, Model } = require("sequelize")
// const sequelize = require("../config/database")
// const bcrypt = require("bcryptjs")
// const jwt = require("jsonwebtoken")

// class User extends Model {

//     async encodePassword(password) {
//         return await bcrypt.hash(password, 10);
//     }

//     async generateToken(user_id, email) {
//         return jwt.sign({
//             user_id: user_id, 
//             email: email
//         },
//         process.env.TOKEN_KEY,
//         {
//             expiresIn: "2h"
//         })
//     }
// }

// User.init({
//     id: {
//         type: Sequelize.UUID,
//         defaultValue: Sequelize.UUIDV4,
//         allowNull: false,
//         primaryKey: true,
//     },
//     token: {
//         type: Sequelize.STRING,
//     },
//     email: {
//         type: Sequelize.STRING
//     },
//     password: {
//         type: Sequelize.STRING
//     },
//     updatedAt: Sequelize.DATE,
//     createdAt: Sequelize.DATE
// }, {
//     sequelize: sequelize,
//     modelName: 'User'
// })




// module.exports = User;
