const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
}); 

connection.connect(function(error:any) {
    if(error) {
        return console.log("[mysql] error: " + error);
    }
    console.log("[mysql] conexión establecida");
});

export default connection;