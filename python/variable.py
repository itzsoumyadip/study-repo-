## IN PYTHON COSTANT VARIBLE CAN NOT CREATED 


num =5
num2 = num
print(id(num)) # returns memory address of the varible

print(id(num) ,id(num2))  # both nun and num2 are pointing towards same Data and Address  this  is why python is more memory effecient 

print(id(5))  # address is not based on varible name it base on box (object) itself

k=5 
print(id(k))  # indirectly k is reffering to same box of  5  so its id will be same as 5's id 

#                num
#                |
#                V
#              -----
#   num2--->  |  5 |
#              ---
#               ^
#               |
#              K    

print(type(num)) # return the type of variable example int,float.. 

  

name="SAHA"

print(id(name))


print(name)




