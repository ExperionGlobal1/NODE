//1.Left triangle
/* let n = 5;
let string = "";
for(let i=1; i <= n; i++){
    for(let j=0;j<i;j++){
        string += "*";
    
    }
    string += "\n";
}
console.log(string); */

//2.Right triangle
// let n = 5;
// let string = "";
// for(let i=1; i <= n; i++){
//     for(let j=0;j<n-i;j++){
//         string += " ";
    
//     }
//     //print star
//     for(let k=0;k<i;k++){
//         string += "*";
//     }
    
//     string += "\n";
// }
// console.log(string); 

//3.downward triangle
// let n = 5;
// let string = "";
// for(let i=1; i <= n; i++){
//     for(let j=0;j<=n-i;j++){
//         string += "*";
    
//     }
//     string += "\n";
// }
// console.log(string);

//4.  Tech Class problem
// let n = 5; 
// // let string = "";

// for (let i = 1; i <= n; i++) {

//   for (let j = 1; j <= i; j++) {
//     // string += j;
//     process.stdout.write(j+' ')
//   }
// //   string += "\n";
//    process.stdout.write('\n')
// }
// // console.log(string);

//5.print L star
//  for(let i=0;i<5;i++){
//     console.log('*')
//  }
//  for(let j=0;j<5;j++){
//     process.stdout.write('*')
//  }

 //6. print square star(mishel sir)
     //Method-1
//  let height=5;
//  let width =50;
//  for(let i=1;i<=height;i++){
//     if(i==1 || i==height){
//         for(let j=1;j<=width;j++){
//             process.stdout.write('*')
//         }
//         console.log();
//     }
//     else{
//         process.stdout.write('*')
//         for(let j=1;j<=width-2;j++){
//             process.stdout.write(' ');
//         }
//         process.stdout.write('*');
//         console.log()
//     }
//  }
 
    //  ///Method-2
    //  let text = '*';
    //  let space = ' ';
    //  let height=5;
    //  let width =50;
    //  for(let i=1;i<=height;i++){
    //    if(i==1 || i==height){
    //   console.log(text.repeat(width))   
    //     }
    //    else{
    //     process.stdout.write('*');
    //     process.stdout.write(space.repeat(width-2));
    //     process.stdout.write('*');
    //     console.log()
    //     }
    //    }


    //10-nov-Lab class

    //7.print pattern -1 ,2 2,3 3 3,4 4 4 4 triangle
   let n=5;
   
   for (let i = 1; i < n; i++) {
    for(let j=0;j<n-i;j++){
        process.stdout.write(' ');
    }
    for (let k = 0; k < i; k++) {
        process.stdout.write(i+' ')
        
    }
    console.log()
   }