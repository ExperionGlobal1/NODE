//Sync

// console.log(1)

// setTimeout(()=>{
//    Name = ["linga","raj","saurav","......."]
//     console.log(Name)
// },5000);

// console.log(3)
// console.log(4)


//////////////////Async

///prob-1
//simple function

// let cb = function (name){
//          name = "Raj";
//      console.log(name)

// }
// cb()

////pro-2
///CalBack function
// function callback(func){

//     let name = "lingsnekeswaran";



//     func(name)

// }
// callback(function (name){

//     console.log(name)

// })

// //prob-3

//  function callback(func){
// //   let Name="raj";
// //   let addrs="patna";
// //   let age=22
//   let detail =['Raj','patna',22,'kochi']
// //   func(Name,addrs,age)
//    func(detail)
//  }
// //  callback(function(Name,addrs,age){
// //     console.log(Name,addrs,age)
// //  })
// callback(function(detail){
//     console.log(detail)
// })

// })
// ///prob-4

// ////create a Callback

const message = function() {  
    console.log("This message is shown after 3 seconds");
}
 
setTimeout(message, 3000);


// /////Anonymous Function
// setTimeout(function() {  
//     console.log("This message is shown after 3 seconds");
// }, 3000);

// //Callback as an Arrow Function
// setTimeout(() => { 
//     console.log("This message is shown after 3 seconds");
// }, 3000);



// //CallBack problem

