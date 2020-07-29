// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome
var str = "Racecar";
var isPalindrome = function (str) {
  str = str.replace(/\W/g, '');
  str = str.toLowerCase();

  return str === str.split('').reverse().join('');
};
