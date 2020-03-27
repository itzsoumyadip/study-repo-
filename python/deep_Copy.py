import copy


spam = ['A','B','C','D']
cheese=copy.deepcopy(spam)


# now changing value in list
cheese[1]="F"


#PIRNTING 

# SPAN
print(spam)
#['A', 'B', 'C', 'D']


# cheese

print(cheese)
#['A', 'F', 'C', 'D']


"""
   explain link 
   
   https://www.geeksforgeeks.org/copy-python-deep-copy-shallow-copy/


"""   