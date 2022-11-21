
const http  = require('https');

// var app = http.createServer((req, res)=>{
//     // res.end("Hello From Node")
//    console.log(req);
// })
var server = http.createServer((req, res)=>{
    // res.end("Hello From Node")
   console.log(req);
})

server.listen(6000)
