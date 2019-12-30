#
# Complete the 'minimumWindowSubstring' function below.
#
# The function is expected to return a STRING.
# The function accepts following parameters:
#  1. STRING fullString
#  2. STRING chars
#

def minimumWindowSubstring(fullString, chars):
    #initialize result container to 0 and infinity
    result = [0, float("inf")]
    #initialize our hashmap to contain all the chars
    counts = {}
    for char in chars:
        counts[char] = 0
    #initialize missing characters to the length of chars
    missing_characters = len(chars)
    
    #initialize our start and end pointers to 0
    start = 0
    
    #iterate the end pointer from 0 to the end of fullString
    for end in range(len(fullString)):
        #if we encounter a target character
        if fullString[end] in counts:
            #if character count is 0
            if counts[fullString[end]] == 0:
                #decrement missing chars
                missing_characters -= 1
            #increment the count of the character
            counts[fullString[end]] += 1
            
        #while missing characters is 0
        while (missing_characters == 0):
            #check if we've found a new minimum length substring
            if (end - start) < (result[1] - result[0]):
                #if so update result to be the current start and end
                result = [start, end]
            #if start is pointing to a target character
            if fullString[start] in counts:
                #decrement the count of that character
                counts[fullString[start]] -= 1
                #if that character's count is now 0
                if counts[fullString[start]] == 0:
                    #increase our missing characters
                    missing_characters += 1
            #increment our start pointer
            start += 1
    
    #check if our result still contains infinity
    if result[1] == float("inf"):
        #if so return empty string
        return ''
    #otherwise return the substring denoted by our result container
    return fullString[result[0]:result[1]+1]