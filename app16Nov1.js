const http = require('http');
const url = require('url');
const fs =require('fs');

// var data = fs.writeFileSync('user-manager.js')

const qs = require('querystring');
const db = require('./user-manager');


var server = http.createServer(function(req, res){
    const link = url.parse(req.url, true);
    const path = link.pathname;

    if(path == "/"){
        res.end("Welcome to my Node App");
    }
    else if(path == "/api/users" && req.method == "GET"){
        let users = db.getUsers();

        let itemsPerPage = 2
        let totalPages = Math.ceil(users.length / itemsPerPage);
        let pageNumber = 1;

        let requestedPage = parseInt(link.query.page)
        if(!isNaN(requestedPage)){
            pageNumber = requestedPage;
        }

        let startIndex = ((pageNumber - 1) * itemsPerPage);
        let endIndex = pageNumber * itemsPerPage;

        let response = {
            itemsPerPage: itemsPerPage,
            totalPages: totalPages,
            pageNumber: pageNumber,
            data: users.slice(startIndex, endIndex)
        }

        let json = JSON.stringify(response);
        res.setHeader('Content-Type', 'application/json');
        res.end(json);
    }
    else if(path == "/api/user" && req.method == "GET"){
        let id = parseInt(link.query.id);
        let user = db.getUserById(id);

        let json = JSON.stringify({data: user});
        res.setHeader('Content-Type', 'application/json');
        res.end(json);
    }


    else if(path=="/api/user" && req.method == "POST"){
        let formData = '';
        req.on('data', function(data){
            formData += data.toString();
        });

        req.on('end', function(){
            let urlData = qs.parse(formData);
        //for insert new value in user m,anager file
            var u=db.getUsers()
    
            var obj={}
            
            obj.id=u.length+1
            obj.name=urlData.name
            obj.email=urlData.email
            obj.password=urlData.password
    
            u.push(obj)
    
            // console.log(u)

            res.write(urlData.name +'\n');     // res.write('\n')  --->for line break
            res.write(urlData.email+'\n');
            res.write(urlData.password);
            res.end();
    
                // var json = JSON.parse(formData);
    
                // res.end(json.email);
        });
    }
     
  
});

server.listen(80);

function getUsers(){
    let id = 1;
    return 
}

// 1 -> 0, 2
// 2 -> 2, 4
// 3 -> 4, 6

