const http = require('http');
const url = require('url');
const qs = require('querystring')
const db = require('./modules/customers')


const server = new http.createServer(function (req, response) {
    var link = url.parse(req.url, true);
    var query = link.query;
    var path = link.pathname;

    if (path == "/api/users" && req.method == 'GET') {

        db.getAll((err, res) => {
            response.end(JSON.stringify(res))
        })

        //-----------------------------------------
        // const sql="SELECT * FROM customer";

        // db.executeQuery(sql,[],(err,res)=>{
        //     response.end(JSON.stringify(res));
        //  });
        //---------------------------------------------------
    }


    else if (path == '/api/user' && req.method == 'GET') {
        let id = query.id
        db.getOne(id, (err, res) => {
            response.end(JSON.stringify(res))
        })
    }


    else if ('/api/user' && req.method == 'POST') {
        formData = '';
        req.on('data', (data) => {
            formData += data.toString();
        });
        req.on('end', () => {
            var query = qs.parse(formData);
            db.createOne(query, (err, result) => {
                if (!err) {
                    response.end(JSON.stringify({ status: "OK" }))
                }
                else {
                    response.end(JSON.stringify({ status: "FAILED" }))
                }
            })
        })
    }
    //--------------------------------for Delete------------------------------
    else if (path == '/api/user' && req.method == 'DELETE') {
        let id = query.id
        db.deleteOne(id, (err, res) => {
            response.end(JSON.stringify(res))
        })
    }
    //------------------------For update in DB-------------------------
    else if ('/api/user' && req.method == 'PUT') {
        formData = '';
        req.on('data', (data) => {
            formData += data.toString();
        });
        req.on('end', () => {
            var query = qs.parse(formData);
            
            db.updateOne(query, (err, result) => {

                if (!err) {
                    response.end(JSON.stringify({ status: "OK" }))
                }
                else {
                
                    response.end(JSON.stringify({ status: "FAILED" }))
                }
            })
        })
    }
   

});
server.listen(80);



//------------------------------------------------------
// db.executeQuery("SELECT * FROM customer",null,(err,res)=>{
//     console.log(err);
//     console.log(res);
// })