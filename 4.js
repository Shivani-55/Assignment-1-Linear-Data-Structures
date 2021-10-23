//Q4. Write a program to print the first non-repeated character from a string?

var firstNonRepeatedCharacter = function (str){   
    for(i=0;i<str.length;i++){
         if(str.indexOf(str.charAt(i)) === str.lastIndexOf(str.charAt(i))){
           console.log("First non-repeated char is : ",str.charAt(i));
           break;
         }
      }
    }
    firstNonRepeatedCharacter ("ankita");