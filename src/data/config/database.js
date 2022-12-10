const Sequelize = require('sequelize');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = process.env.exemple;

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {dialect: 'mysql', host: DB_HOST, port: DB_PORT});

module.exports = sequelize;