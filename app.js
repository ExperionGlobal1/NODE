var http=require('http')
var fs = require('fs')


var app=http.createServer((req, res)=>{

// res.setHeader('Content-Type','text/html');
res.setHeader('Content-Type','text/csv');


//---------------------------------------------------------//
    // console.log(req.method, req.url);  //vvi
//-----------------------------------------------------------------//
    // console.log("Hello from Node!")
  //------------------------------------------------------//
    // res.write("HELLO")
    // res.write("from")
    // res.write("NODE")
    //-----------------------------------------------------//
  
    // for(let i=0;i<10;i++){

    //     // res.end(`<h1>${i}</h1>`);   // -->only one value outpur and break
    //     res.write(`<h1>${i}</h1>`);   //by using write the all value of loop will be show

    // }
    // res.end();
//---------------------------------------------------------------//
//   if(req.url == "/"){
//     res.end("<h1>Welcome</h1>");
//   }
//   else if(req.url == "/about"){
//     res.end("<h1>About Us</h1>")
//   }
//   else if(req.url == "/contact"){
//     res.end("<h1>Contact Us</h1>")
//   }
//-------------------------------------------------------------//
//     // res.end("saghgs<h1> Hello from Node world</h1>");
//-------------------------------------------------------------//
// server.on('listening', ()=>{
//     // console.log("server is running on port 3000")
// });
//-------------------------------------------------------------//
// server.on('request', ()=>{
// // console.log(`${req.method} request to page: ${req.url}`);
// )};

//-----------------------------------------------------------------//

if(req.url =="/"){
    var Content =fs.readFileSync('templates/index.html','utf8');
    res.end(Content);
}
 else if(req.url =="/about"){
     var Content =fs.readFileSync('templates/about.html','utf8');
     res.end(Content);
 }

    let url = req.url.split('?')[0];

    // console.log(req.url)
    // console.log(url)

    if(url =='/login'){
        var Content = fs.readFileSync('templates/login.html','utf8');
        res.end(Content);
    }
   




//---------------------------------------------------------------------//

});

app.listen(3000)
