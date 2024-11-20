// utils/query.js

const pool = require('../config/db');

/**
 * Initializes database tables.
 * Executes a series of table creation queries.
 * @param {Array} tables - An array of SQL table creation queries.
 */
exports.initTables = async (tables) => {
    for (const table of tables) await pool.query(table);
};