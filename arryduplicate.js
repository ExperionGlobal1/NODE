
let arr =[1,2,2,3,4,5,1];
for(let i=0; i< arr.length;i++){
    for(let j=i + 1; j< arr.length;j++){

        if(arr[i] == arr[j]){
            console.log(arr[j]);
        }
    }

}