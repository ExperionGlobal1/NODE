var inputArray = [1,12,34,5];

var even=[];

var odd=[];

for (let i = 0; i <inputArray.length; i++) {

    if (inputArray[i]%2==0) {

       

        even+=inputArray[i]

    }

    else{

odd+=inputArray[i]

    } 

}

console.log(even);

console.log(odd);