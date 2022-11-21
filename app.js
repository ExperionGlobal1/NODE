const http = require('http');
const qs = require('querystring');
const mysql = require('mysql2');
const read = require('readline-sync');

const connDetails = {
    host:'localhost',
    user:'root',   //write username of database
    password:'Experion@123',   //use same password of mysql applns
    database:'experion3'   //file name of database

}
//---------------------------check connectivity----------------------------------------
let connection = mysql.createConnection(connDetails);   //if output will null then its all okay ,connection is successfully connected
// connection.connect((err)=>{
//     console.log(err)
// });

//----------------------------------more time taking method(old method-2)------------------------------------------------

// let email = read.question("enter the email:");

// email = mysql.escape(email);                   //use always this method bcz it safe to no one  hacked your database--escape method

// const query = `SELECT * FROM  customer WHERE email='${email}' AND id > ${id}`;

// connection.query(query,(err,result)=>{
//     console.table(result)             //if want to show data in tabular form so write console.table
//  });

//----------------------------------- Reccomended method to use--vvi-(3)--------------------------------------------------
let email = read.question("enter the email:");
const query = `SELECT * FROM  customer WHERE email=? OR id > ? `;
console.log(query);
connection.connect();
connection.query(query,[email, 1],(err,result)=>{
console.table(result)
});

//-----------------------------------show output from query -method -1-----------------------------------------
// const query = "SELECT * FROM  customer ORDER BY ID DESC";   //user see all data details according to query

// connection.connect((err)=>{
//     console.log(err)
// });

// connection.query(query,(err,result)=>{
//     console.table(result)             //if want to show data in tabular form so write console.table
// });
//--------------------------------------------------------------------------------------------
connection.end();
