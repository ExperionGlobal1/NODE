const db = require('./db');
//---------------display all data- customer--------------------
function getAll(callback){
    const sql ="SELECT id,name,email,age,country FROM customer";
    db.executeQuery(sql,[],callback);
}
//------------------- insertion---------
function addOne(name,email,age,country,callback){
    const sql = "INSERT INTO customer(name,email,age,country)VALUES (?,?,?,?)";
    db.executeQuery(sql,[name,email,age,country],callback);
}
//---------------------updation-----------------------
function updateOne(name,email,age,country,id,callback){
    const sql = "UPDATE customer SET name=?,email=?,age=?,country=? WHERE id=?";
    db.executeQuery(sql,[name,email,age,country,id],callback);
}

//------------------------deletion ----------------
function deleteOne(id,callback){
    var sql ="DELETE FROM customer where id=?";
    db.executeQuery(sql,[id],callback);
}

module.exports.getAll = getAll;
module.exports.addOne = addOne;
module.exports.updateOne = updateOne;
module.exports.deleteOne=deleteOne;