
//First  method
// let arr =[1,2,2,3,4,5,1];
// for(let i=0; i< arr.length;i++){
//     for(let j=i + 1; j< arr.length;j++){

//         if(arr[i] == arr[j]){
//             console.log(arr[j]);
//         }
//     }



// }

//Second Method
let arr = [4, 5, 7, 8, 9, 3, 5, 5, 6, 4, 6];
let duplicate = [];
for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    // counting duplicate 
    let count = 0;
    for (let j = i; j < arr.length; j++) {
        const element = arr[j];
        if (number === element) {
            count++;
        }
    }
    if (count > 1) {
        let hasFoundMatch = false;
        for (let i = 0; i < duplicate.length; i++) {
            if (duplicate[i] == number) {
                hasFoundMatch = true;
                break;
            }
        }
        if (!hasFoundMatch) {
            duplicate.push(number);
        }
    }
}
console.log(duplicate);