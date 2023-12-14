/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

function highestRank(arr){
    let dict = {}
    let value = 0;
    let maxCount = 0;
    
    arr.forEach(element => {
      if(!(element in dict)){
        dict[element] = 1;
      }
      else{
        dict[element] += 1
      }
    })  
    
    Object.keys(dict).forEach(element => {
      if(dict[element] > maxCount){
        maxCount = dict[element]
        value = element
      }
      else if(dict[element] == maxCount){
        value = Math.max(element, value)
      }
    })
    
    return parseInt(value)
    
  }