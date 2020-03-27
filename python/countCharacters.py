import pprint  #   pretyprint  module





msg = "hey hey its is  a message form april  it  was  a bright cold day in April , and the clocks were striking thirteen"

count = {}

for char in msg:
    count.setdefault(char,0) # if char key is not present in count dictionaries the it will set ,key char:value  0 
    count[char]+=1  # increment the char key value by 1 per word  

# here char means all unique alphabet that will be fetch form msg  ,such as a,b,c,d,e,....z  OR/AND A,B,...Z

print(count)


"""
{'h': 5, 'e': 9, 'y': 3, ' ': 26, 'i': 10, 't': 7, 's': 7, 'a': 7, 'm': 2, 'g':
3, 'f': 1, 'o': 3, 'r': 7, 'p': 2, 'l': 4, 'w': 2, 'b': 1, 'c': 3, 'd': 3, 'n':
4, 'A': 1, ',': 1, 'k': 2}


"""
#pretty print 

pprint.pprint(count)

"""
{' ': 26,
 ',': 1,
 'A': 1,
 'a': 7,
 'b': 1,
 'c': 3,
 'd': 3,
 'e': 9,
 'f': 1,
 'g': 3,
 'h': 5,
 'i': 10,
 'k': 2,
 'l': 4,
 'm': 2,
 'n': 4,
 'o': 3,
 'p': 2,
 'r': 7,
 's': 7,
 't': 7,
 'w': 2,
 'y': 3}



"""

#save  pretty format  in varible as string 

prettyText=pprint.pformat(count)

print(prettyText)


"""
{' ': 26,
 ',': 1,
 'A': 1,
 'a': 7,
 'b': 1,
 'c': 3,
 'd': 3,
 'e': 9,
 'f': 1,
 'g': 3,
 'h': 5,
 'i': 10,
 'k': 2,
 'l': 4,
 'm': 2,
 'n': 4,
 'o': 3,
 'p': 2,
 'r': 7,
 's': 7,
 't': 7,
 'w': 2,
 'y': 3}



"""