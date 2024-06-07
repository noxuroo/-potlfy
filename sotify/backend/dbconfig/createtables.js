const pool = require('./options');

let isPoolEnded = false;

const endPool = () => {
    if (!isPoolEnded) {
        pool.end();
        isPoolEnded = true;
    }
};

const createTableQueries = [
    {
        query: `
        CREATE TABLE IF NOT EXISTS "user" (
            name VARCHAR(20) NOT NULL,
            password VARCHAR(50) NOT NULL
        );
    `,
        name: 'user'
    },
]

const createTables = async () => {
    try {
        for (const { query, name } of createTableQueries) {
            await pool.query(query);
            console.log(`Таблица "${name}" успешно создана`);
        }
    } catch (err) {
        console.error('Ошибка при создании таблицы:', err);
    }
};

createTables();