const express =require('express');
const path =require('path');
const parser =require('body-parser');

const app1 = express();

app1.use(parser.urlencoded({extended:false}));

//---------------------Use --------------------
app1.use("/",(req,res,next)=>{
    console.log("Request received.");
    next();
});


app1.use("/",(req,res,next)=>{
    console.log("Request received in second middleware.");
    next();
});

//-----------------------------Get ------------------------------
app1.get("/",(req,res)=>{
    var loc =path.join(__dirname,'views','index.html');
    res.sendFile(loc);
});

app1.get("/about",(req,res)=>{
    res.send("About us page!");
});


app1.listen(80);