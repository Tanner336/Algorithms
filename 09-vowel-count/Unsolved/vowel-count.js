// Write code to return the the number of vowels in `str`


var vowelCount = function(str) {
  var numVowels = 0
  var vowelCheck = str.split("")
  for(var i =0; i < vowelCheck.length; i++){
    if(vowelCheck[i].toLowerCase() === "a" || vowelCheck[i].toLowerCase() === "e" || vowelCheck[i].toLowerCase() === "i" || vowelCheck[i].toLowerCase() === "o" || vowelCheck[i].toLowerCase() === "u") {
      numVowels++
      console.log(vowelCheck[i])
    }
  }
  return numVowels
  
};
