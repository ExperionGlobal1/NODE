var flno=[]
var number = require('readline-sync')
// var i=0
for (let i = 0; i < 10; i++) {
    
    var no = number.question("Enter the number: ")
    flno.push(no)
}
// console.log(flno)
// console.log("Traversing through the elements");
// flno.forEach(()=>{
//     console.log(flno)
// })



//sorting
let temp = 0;
for (let i = 0; i < flno.length; i++) {
    for (let j = 0; j < flno.length-i-1; j++) {
        if(flno[j]>flno[j+1]){
            temp= flno[j+1]
            flno[j+1] = flno[j]
            flno[j] = temp
        }
        
        
    }
    
}