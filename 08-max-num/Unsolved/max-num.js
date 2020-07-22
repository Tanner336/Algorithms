// Write code to return the largest number in the given array

var startnumber = 0

var maxNum = function(arr) {
  for(var i = 0; i<arr.length; i++) {
    if(startnumber < arr[i]) {
      startnumber = arr[i]
    }
  }
  return startnumber

};
