const db = require('../dbhandeler')    //double .. means that read all file inside the  main file name

function getAll(callback){
    var sql = "SELECT * FROM customer"
    db.executeQuery(sql,[],callback)
}

function getOne(id,callback){
    var sql = "SELECT * FROM customer where id = ?"
    db.executeQuery(sql,[id],callback)
}
function createOne(data,callback){
    var sql = "INSERT INTO CUSTOMER(name,email,age,country) VALUES(?,?,?,?)";
    var values =[
        data.name,
        data.email,
        data.age,
        data.country
    ];
    db.executeQuery(sql, values, callback)
}
//-----------------------------------for delete-----------------------
function deleteOne(data,callback){
    var sql ="DELETE FROM customer where id=?"
    db.executeQuery(sql,[data],callback)
}

//------------------------for Update-----------
function updateOne(data,callback){
    var sql="UPDATE customer SET name =?,email=?,age=?,country=? WHERE id=?"

    var values =[
        data.name,
        data.email,
        data.age,
        data.country,
        data.id
    ];
    console.log(values)
    db.executeQuery(sql,values,callback)
}


module.exports.getAll = getAll
module.exports.getOne = getOne
module.exports.createOne=createOne
module.exports.deleteOne=deleteOne
module.exports.updateOne=updateOne