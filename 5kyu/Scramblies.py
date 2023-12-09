"""
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
"""

def scramble(s1, s2):
    
    letters = {}
    
    #add all s2 to set
    #iterate through s1, if char in map subtract 1
    #if not, continue
    #at the end if letters is empty, return True else False
    
    for char2 in s2:
        letters[char2] = 1 +letters.get(char2, 0)
        
    for char1 in s1:
        if char1 in letters:
            if letters[char1] == 1:
                del letters[char1]
            else:
                letters[char1] = letters.get(char1, 0) - 1
        
    if len(letters) == 0:
        return True
    else: 
        return False