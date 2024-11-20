// utils/initDb.js

const { initTables } = require('./query');
const { getDateTime } = require('./time');

/**
 * Initializes the database by creating the necessary tables.
 */
exports.initDb = async () => {
    const tables = {
        users: `CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            profile_image TEXT DEFAULT  '../../media/profiles/defaultprofile.png',
            last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            account_date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            account_date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            account_date_deleted TIMESTAMP
        )`,
        guests: `CREATE TABLE IF NOT EXISTS guests (
            id SERIAL PRIMARY KEY,
            profile_image TEXT DEFAULT '../../media/profiles/defaultprofile.png',
            account_date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            account_date_deleted TIMESTAMP
        )`,
        equipments: `CREATE TABLE IF NOT EXISTS equipments (
            id SERIAL PRIMARY KEY,
            reference TEXT NOT NULL UNIQUE,
            name TEXT NOT NULL,
            description TEXT,
            image TEXT,
            price DECIMAL(10, 2) NOT NULL,
            category TEXT NOT NULL,
            stock INT NOT NULL,
            date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            date_deleted TIMESTAMP
        )`,
        user_carts: `CREATE TABLE IF NOT EXISTS user_carts (
            id SERIAL PRIMARY KEY,
            user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            equipment_id INT NOT NULL REFERENCES equipments(id) ON DELETE CASCADE,
            quantity INT NOT NULL,
            UNIQUE(user_id, equipment_id)
        )`,
        user_rentals: `CREATE TABLE IF NOT EXISTS user_rentals (
            id SERIAL PRIMARY KEY,
            user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            equipment_id INT NOT NULL REFERENCES equipments(id) ON DELETE CASCADE,
            rental_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            return_date TIMESTAMP,
            rental_duration_days INT NOT NULL,
            rental_status TEXT NOT NULL DEFAULT 'ongoing', -- 'ongoing', 'completed', 'canceled'
            date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            date_deleted TIMESTAMP
        )`,
    };

    try {
        await initTables(Object.values(tables));
        console.log(`${getDateTime()} - Database initialized.`);
    } catch (err) {
        console.error(`${getDateTime()} - Error initializing database: ${err.message}`);
    }

}