function isPalindrome(num) {
    let result;
    const temp = num.toString().split('').reverse().join('') * 1;
    return (result = num === parseInt(temp) ? true : false);
 }
 
 console.log(isPalindrome(120));
 console.log(isPalindrome(131));