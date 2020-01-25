# def add (a,b):    # formal argument 
#     c=a+b       
#     print(c)

#  add(5,4) #actula argument 

#  # actual    



## varible Length argument

def sum(*b):  #  "5,3,5,3" is assigned to *b as tuple
    c=0
    for i in b:     # fetching one by one  value from tuple
        c=c+i  
    print(c) #16

sum(5,3,5,3)