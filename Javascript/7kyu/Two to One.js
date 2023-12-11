/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
    let letters = {}
    let res = ''
    
    //Iteratae over elements in s1 and s2
    for(let i=0; i<s1.length; i++){
      if(!letters[s1[i]]){
        letters[s1[i]] = 1
      }
    }
    for(let i=0; i<s2.length; i++){
      if(!letters[s2[i]]){
        letters[s2[i]] = 1
      }
    }
    //Extract keys from letters, sort, and append to a resultant string. Return res
    letters = Object.keys(letters).sort()
    for(let l=0; l<letters.length; l++){
        res += letters[l]
    }
    return res
  }