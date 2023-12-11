"""
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100
"""

def increment_string(strng):

    index = len(strng)-1
    
    if index == 0 and strng[index].isnumeric():
        num = int(strng) + 1
        return str(num)
    
    while index>0 and strng[index].isnumeric():
        index = index -1
        
    endNum = strng[index+1:]
    lenNum = len(endNum)
    
    if endNum:
        endNum = int(endNum)+1
        endNum = str(endNum)
        while len(endNum) < lenNum:
            endNum = '0'+endNum
    else: 
        return strng + '1'

    return strng[:index+1] + endNum