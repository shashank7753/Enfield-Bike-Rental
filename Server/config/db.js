const knex = require('knex');
const knexConfig = require('../knexfile'); // Adjust path if knexfile.js is elsewhere

const db = knex(knexConfig.development);

module.exports = db;
