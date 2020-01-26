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


## keyworded Varible Length argument = takes  both keyworded and Varible length to pass multiple data with keyword in actual argument   

def person(name,**data):
    print("")
    print(data)
    for i,j in data.items():
        print(i,j)

person('navin',age=28,city='Mumbai',mob=12345678)


