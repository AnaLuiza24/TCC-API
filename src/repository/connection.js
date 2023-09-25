import mysql2 from 'mysql2/promise';
import 'dotenv/config'

const connection = await mysql2.createConnection({
    host: process.env.HOST,
    database: process.env.DB,
    user: process.env.USER,
    password: process.env.PWD
})

console.log('API subiu');
export default connection;
