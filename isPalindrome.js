// Write your code below
function checkPalindrom(str){
    var flag = true;
    for( var i = 0; i <= str.length-1; i++){
     if( str[i] !== str[str.length - i-1]){
       flag = false;  
      }
     }
     if(flag == false){
       console.log('the word is not a palindrome!');   
     }
     else{
     console.log('the word is a palindrome!');
     }
 }
 
 checkPalindrom('racecar');