const express =require('express');
const path =require('path');
const parser =require('body-parser');

const Empapp = express();

Empapp.use(parser.urlencoded({extended:false}));
Empapp.use('/static',express.static(path.join(__dirname,'static')));

//---------------get---------------------
Empapp.get("/employee/create",(req,res)=>{
    var loc = path.join(__dirname,"views",'emp.html');
    res.sendFile(loc);
});

//---------------------- Post----------------------
Empapp.post("/employee/create",(req,res)=>{
    console.log(req.body.name );
    res.json(req.body );
});



Empapp.listen(80);