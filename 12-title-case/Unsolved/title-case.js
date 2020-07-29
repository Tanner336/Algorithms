// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i =0; i<splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);

  }
  return splitStr.join(' ');
};
