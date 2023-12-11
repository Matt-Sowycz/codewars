/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"

*/


//My Code
function spinWords(string){
  //All 5 or more letter words
  if(string.length== 0){
    return ''; 
  }

  let words = string.split(" ");
  let res = '';
  for(let i=0; i<words.length; i++){
    if(words[i].length > 4){
      let revString = ''
      for(let j=words[i].length-1; j>=0; j--){
        revString += words[i][j]
      }
      res = res + revString;
    }
    else{
      res = res+words[i];
    }
    res += ' ';
  }
  
  res = res.slice(0, -1);
  return res;
}