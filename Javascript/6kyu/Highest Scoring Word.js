/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x){
    let arr = x.split(" ")
    let maxSum = 0
    let res = ''
  
    for(let word=0; word<arr.length; word++){
      let score = 0
      for(let i=0; i<arr[word].length; i++){
        score += arr[word].charCodeAt(i)-96
      }
      if(score>maxSum){
        maxSum = score
        res = arr[word]
      }
    }
    return res
  }