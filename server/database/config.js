import pg from 'pg';

const pool = new pg.Pool({
    user: 'postgres',
    database: 'maintenance-tracker',
    password: 'Stephanie.123',
    host: '127.0.0.1',
    port: '5432'
})

export default pool;