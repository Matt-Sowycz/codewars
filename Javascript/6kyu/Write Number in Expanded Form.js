/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expanded_form(12) # Should return '10 + 2'
expanded_form(42) # Should return '40 + 2'
expanded_form(70304) # Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
    let arr = [];
    let res = '';
    while(num>0){
      digit = num%10;
      num = parseInt(num/10)
      arr.unshift(digit)
    }
  
    let tens = arr.length-1;
    arr.forEach((element) => {
      let val = element * (10**tens);
      tens -= 1;
      if(!val==0){
          res += val.toString() + ' + ';
      }
    });
    res =res.slice(0, -3)
    
    return res;
  }