const http = require('http');
const fs =require('fs');
const url =require('url');
const qs =  require('querystring');


var app2 = http.createServer((req , res)=>{

    const link = url.parse(req.url,true);
    console.log(link)
    let query = link.query;
    const path = link.pathname;   

    if (path == '/') { 
        
        res.end("Welcome to my Node!");
    
    }
    else if (path == "/api/users") {
        let users = getUsers();
         
        let itemsPerPage = 2
        let totalPages = Math.ceil(users.length / itemsPerPage);
        let pageNumber=1;
        // let pageNumber =parseInt(link.query.page);
        
        let requestedPage = parseInt(link.query.page);  
        if(!isNaN(requestedPage)){          //if users  not give a no. then bydefault page =1
            pageNumber = requestedPage;
        }
        // console.log(pageNumber);

        let startIndex = ((pageNumber - 1) * itemsPerPage)+1;
        let endIndex = pageNumber * itemsPerPage;

    

        let response ={
            itemsPerPage:itemsPerPage,
            totalPages:totalPages,
            pageNumber:pageNumber,
            data:users.slice(startIndex -1,endIndex)
        }

       let json = JSON.stringify(response);
       res.setHeader('Content-Type','application/json');
       res.end(json);

       //how to find page => localhost/api/users?page=1
    }

    else if(path =="/api/user"){
     var users = getUsers();
     let id =link.query.id;
     
     let user =null;
     for(let i=0;i<users.length;i++){
        if(users[i].id ==id){
            user = users[i];
            break;
        }
     }
    let json = JSON.stringify({data:user});
    res.setHeader('Content-Type','application/json');
    res.end(json);

     //how to write on chrome=> localhost/api/user?id=3   here use chane id no and get diff types of data
    }
    
});
app2.listen(80);

function getUsers(){
    let id = 1;
    return [
        {id:id++,name:'john',email:'johan@gmail.com'},
        {id:id++,name:'ram',email:'ram@gmail.com'},
        {id:id++,name:'shyam',email:'shyam@gmail.com'},
        {id:id++,name:'golu',email:'golu@gmail.com'},
        {id:id++,name:'radhe',email:'radhe@gmail.com'},
        // {id:id++,name:'sohan',email:'sohan@gmail.com'},
    ]
}