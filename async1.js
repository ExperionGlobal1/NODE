
console.log(1)
///----------
function Data(){
    return new Promise(function (res,rej){
        setTimeout(function(){
            let pdata = 'hello world '
            if(pdata){
                res(pdata);
            }
            else{
               rej()
            }
        },6000)
       
    })
}
async function work(){
    try{
    let w1 = await Data()
    console.log(w1)
     }
     catch{
        console.log('data not fund')
     }
 }
work()
//--------------
console.log(2)