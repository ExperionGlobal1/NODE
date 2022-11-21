// const fs  =  require('fs');
//  var  nikhil = {
//     fullname : 'Raj kIshore',
//     age : 22,
//     phone : [65321,67324567]
//  }
//  var string = JSON.stringify(nikhil);
//  fs.writeFileSync("data.json",string);
//  console.log(string);

//  fs.writeFile("data-async.json",string,()=> {
//     console.log("ASYNC File saved successfully.")
//  });
//  console.log("COMPLETED")

//  Read File
// const fs  =  require('fs');     
// var content = fs.readFileSync("data.json","utf-8");
// console.log(content);

// const fs  =  require('fs');
// fs.readFile("data.json",(err,data) =>{
//     console.log(data)
// });


//date-09/11/22

    //request-1  +++++++++++++

// const http = require('https');

// http.get('https://reqres.in/api/users',(res)=>{
//     var content = '';
//     res.on('data',(data)=>{
//    content += data;
//     });
//     res.on('end',()=>{               //for all details
//         console.log(content);
//     });
// });
  

   //request-2

//    const axios = require('axios');
//    axios.get('https://reqres.in/api/users')
//   .then(function(response){
//     console.log(response.data);
//   });

//////how to find page (vvi)

const axios = require('axios');
const fs = require('fs');
 function getData(page){
    return promise = new Promise((res, rej)=>{
        axios.get('https://reqres.in/api/users?page=' +page)
        .then(function(response){
          res(response.data.total_pages);
          
        });
    });
 }


getData(1).then(function(response){
    console.log(response)
})