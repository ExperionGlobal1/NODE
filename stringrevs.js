///Reverse   any string


//   let l =string.length;
//   let temp = '';

// for(let i=l-1;i>=0;i--){

  
//   temp =string[i];
  

//     process.stdout.write(temp);
    
// }



///Reverse individual word in a string

      //method-1
// let readlineSync = require('readline-sync');
// let s = readlineSync.question("Enter the string:");

// var arr=s.split(' ')

// var t=''

// for(i=0;i<arr.length;i++)

// {

//    for( j=arr[i].length-1;j>=0;j--)

//    {

//     t=t+arr[i][j]

//    }

//    process.stdout.write(t+' ')

//   t=''

// }


///method-2(Mishel bro)

// let readlineSync = require('readline-sync');
// let string = readlineSync.question("Enter the string:").split(' ');
// // console.log(string)

// var res = '';
// string.forEach(word=>{
//   var rev = '';
//   for(let i = word.length - 1; i>=0; i--){
//     rev += word[i]
//   }
//   res += rev + ' ';
// });
// console.log(res)
    
    
    




