const http = require('http');
const fs = require('fs');
const url = require('url');
const qs =  require('querystring');


var server = http.createServer(function(req, res){
    let address = url.parse(req.url, true);
    let query =address.query;
    let path = address.pathname;

    if(path =="/login" && req.method =="GET"){
        var  content = fs.readFileSync('templates/login.html','utf8');
        res.end(content);
    }
    else if(path =="/login" && req.method  == "POST"){
        let body = '';
        req.on('data',function(data){
            body += data.toString();
        });

        req.on('end',function(){
            var query = qs.parse(body);
            res.write(`<h1>${query.email}</h1>`);
            res.end(`<h2>${query.password}</h2>`);
        });
        
    }
    // else if(path =="/result"){         //http://localhost/result?email=raj1232%40gmail.com
    //     res.end(query.email);
    // }
    
});
server.listen(80);