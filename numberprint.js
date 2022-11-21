let l=1;
let string = "";
for(let i=1 ;i <=20; i++){
    for(let j=1; j<= i ;j++){
        string += l;
        string  += " ";
      
    }
    string += "\n";
    l = l + 2;
}
console.log(string);