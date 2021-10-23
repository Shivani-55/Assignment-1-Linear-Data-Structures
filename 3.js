//Q3. Write a program to check if two strings are a rotation of each other?

function areRotEq (str1, str2) {
    if (str1 === str2) {
      return true
    }
    if (str1.length !== str2.length) {
      return false
    }
    var start2 = str2.indexOf(str1[0]);
    if (start2 === -1) return false;
    if(true){
      console.log("Two strings are rotation of each other");
    }
    else{
      console.log("Two strings are not rotation of each other");
    }
    
    return str1 === str2.slice(start2) + str2.slice(0, start2)
    
}

areRotEq("abcd", "bcda");