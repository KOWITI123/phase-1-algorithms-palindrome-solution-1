function isPalindrome(word) {
  // Write your algorithm here
  const str = word.split('').reverse().join('');
  if (str === word){ 
      return true 
  } 
  else { 
    return false 
  }
}


/* 
  Add your pseudocode here
*/
 //create a variable to represent the parameter(word)
 //if the elements match they return true
 //else they return false
/*
  Add written explanation of your solution here
*/
//create a variable to represent the 'word' that would hold the string
//Use .split('') method to return array of each element of the string
//call the .reverse()to reverse the string
//call .join('')method to convert the array back into a string

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
