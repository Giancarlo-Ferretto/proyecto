const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: '',
    database: 'proyecto'
}); 

connection.connect(function(error:any) {
    if(error) {
        return console.log("[mysql] error: " + error);
    }
    console.log("[mysql] conexión establecida!");
});

export default connection;