"""
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
"""

def solution(string):
    
    i = len(string)-1

    revString = ''
    while i>=0:
        revString += string[i]
        i = i-1
        
    return revString