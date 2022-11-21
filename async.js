console.log(1)

// function print(arg){
//     console.log(arg)
// }
//---------------call back function---------------------
// function icecream(makeicecream,f){
//     makeicecream(f)
// }
// icecream(function (fl){
//     print(`${fl} flavoured icecream`);

// },"kiwi")

//------------------------------------------
// let data = "undefined"
// truthy => 1000000 [1,2,3] {}
//falsy => 0 "" undefined false
// 
// if(data){
//     console.log("data is arrived")
// }
// else{
//     console.log("data is not arrived")
// }

//----------------string -------------------------
// let fullname = 'sneka priya';
// let fname = fullname.substring(0,5).toUpperCase()
// console.log(fname)


//------------timeout  async promise -old method-------------

// function promise(func){
//     func(res,rej)
// }
// function task(){
//     return new Promise(function (res,rej){
//         setTimeout(function (){
//             let bfs = ''
//             if(bfs){
//             res(bfs);
//             }
//             else{
//                 rej()
//             }
//         },5000)

//     })
// }

// fullfilled reject pending---------

// task().then(function (result){
//     console.log("then "+result)
//     return result[0] + " sir"
// })
// .then(function (result){
//     console.log(`second then ${result}`)
// }).catch(function (result){
// console.log("catch "+result)
// })


// async await...... new method..................

function task(){
    return new Promise(function (res,rej){
        setTimeout(function (){
            let bfs = ''
            if(bfs){
            res(bfs);
            }
            else{
                rej()
            }
        },5000)

    })
}

/// this function is replace the .then method
async function work()
{
    try{
let data = await task()
console.log(data)
    }
    catch{
        console.log('not found')
    }
}

work()

//--------------------
console.log(3)
