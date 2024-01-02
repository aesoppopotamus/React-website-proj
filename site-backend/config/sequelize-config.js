// sequelize-config.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const dbName = process.env.DB_NAME;
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;


const mariadb = require('mariadb');

const sequelize = new Sequelize({
    username: dbUser,
    password: dbPassword,
    database: dbName,
    host: dbHost,
    dialect: 'mariadb',
    dialectModule: mariadb,
    port: 3306
});

module.exports = sequelize;