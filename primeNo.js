////method-1

// let readlineSync = require('readline-sync');
// let n = readlineSync.question("Enter the number of terms:");

// for(let i=2;i<=n;i++){
//     let flag=0;
//     for(let j=2;j<i;j++){
//         if(i % j == 0){
//             flag =1;
//             break;
//         }
//     }
//     if(i >1 && flag==0){
//         process.stdout.write(i + ' '.toString());
//     }
// }

///method-2

const prime =(n)=>{
    let arr =[];
    for(let i=2; arr.length<n;i++){
        let flag=0;
        for(let k=2;k<=i;k++){
            if(i%k==0 && i>k){
                flag=1;
            }
           else if(i%k==0 && flag !=1){
            arr.push(i);
           }
        }
    }
    return arr;

};
process.stdout.write(prime(10));