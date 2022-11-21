
////Method-1
// let arr1 = [1,2,3,8,7];
// let arr2 = [4,3,2,1,6];

// function arrUnique(arr) {
//     let a = arr.concat();
//     for(var i=0; i<a.length; i++) {
//         for(let j=i+1; j<a.length; j++) {
//             if(a[i] === a[j])
//                 a.splice(j--, 1);
//         }
//     }

//     return a;
// }
// let arr3 = arrUnique(arr1.concat(arr2));
// process.stdout.write(arr3 +' '.toString());

///Method-2

let readlineSync = require('readline-sync');
let arr1 = readlineSync.question("Enter the element of array:");
let arr2 = readlineSync.question("Enter the  element of array:");

// var arr1=[1,2,3,3,3]
// var arr2=[3,4,5,4]

var arr3=arr1.concat(arr2)

var arr4=[]

for(i=0;i<arr3.length;i++)                    

{

    if(!(arr4.includes(arr3[i])))              

    {

     arr4.push(arr3[i])

    }

}

console.log(arr4)