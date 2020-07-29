// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
  let answer = 1;
  if(num == 0 || num == 1){
    return answer;
  } else{
    for(var i = num; i>=i; i--) {
      answer = answer * i;
    }
    return answer
  }
  factorial();
};
