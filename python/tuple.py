#   tuple imMuteable  


tup = (21,36,14,25,21) # is in round baracket 

print(tup[1])
  #36

# since tuple is immutable interation speed is much faster the list
print(tup.count(21))   #return the number of occuerence of the value
#2 

print(tup.index(14))  # find the index number of the value 
# 2          

###  tup[1]=2     # TypeError: 'tuple' object does not support item assignment