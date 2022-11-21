function Palindrome(){   
    const readline = require('readline-sync');
    const string = readline.question('enter the the string: ');
    var len = string.length;
    
    for(let i=0;i < len / 2 ; i++){
        if(string[i] !== string[len -1 - i]){
            console.log("it is not palindrome");
            break;
          
        }
        else{
             console.log("it is palindrome");
             break;
            
        }
        
    }
   
}
Palindrome();









