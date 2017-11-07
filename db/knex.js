const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile');
const environmentConfig = config[environment];
const knex = require('knex');
const dbConnection = knex(environmentConfig);

module.exports = dbConnection;
