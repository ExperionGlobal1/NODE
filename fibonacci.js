let readlineSync = require('readline-sync');
let n= readlineSync.question("Enter the number of terms:");

let nextTerm;
let n1 = 0;
let n2 = 1;
process.stdout.write('Fibonacci Series:')
for(let i=1;i<=n;i++){
    process.stdout.write(n1+" ".toString());
    nextTerm = n1 +n2;
    n1 = n2;
    n2 =nextTerm;
}
