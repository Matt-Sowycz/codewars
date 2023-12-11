"""
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
"""

def solution(s):
    
    n=0
    res = []
    
    while n < len(s) -1:
        res.append(s[n] + s[n+1])
        n = n+2
        
    if n == len(s)-1:
        res.append(s[n]+'_')
        
    
    
    return res