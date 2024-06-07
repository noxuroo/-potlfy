const { Pool } = require('pg');

const pool = new Pool({
    user: 'newuser',
    host: 'localhost',
    database: 'postgres',
    password: 'password123',
    port: 5432,
});

module.exports = pool;
