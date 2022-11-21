const mysql = require('mysql2')

const connectionDetails = {
host:'localhost',
user:'root',
password:'Experion@123',
database:'experion3'
}

function getConnection(){
    return mysql.createConnection(connectionDetails);

}

function executeQuery(query,parameters,callback){
    
    let connection=getConnection();
    connection.connect();
    connection.query(query,parameters,callback);
    connection.commit();  ///for udate in data base
    connection.end();
}
module.exports.executeQuery = executeQuery;
