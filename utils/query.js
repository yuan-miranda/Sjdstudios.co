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

exports.addUser = async (email, password) => {
    // check if email already exists
    const existingUser = await this.checkExistingUser(email);
    if (existingUser) return existingUser;

    const query = `INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *`;
    const result = await pool.query(query, [email, password]);

    if (result.rows.length) return result.rows[0];
    return null;
}

exports.checkExistingUser = async (email) => {
    const query = `SELECT * FROM users WHERE email = $1`;
    const result = await pool.query(query, [email]);
    if (result.rows.length) return result.rows[0];
    return null;
}