

const mysql=require('mysql2/promise');
//prepear the connection parametry that use to conneecr to the database
const dbConfig = {
    connectionLimit:process.env.DB_CONNECTION_LIMIT,
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
};
//create the connection pool

const pool= mysql.createPool(dbConfig);

async function query(sql,params) {
    const [rows,fields]=await pool.execute(sql,params);
    return rows
    
}
module.exports={query}