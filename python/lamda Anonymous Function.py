# FUNCTION IN PYTHON IS FUNCTION

#lamda is a name less function 

f=lambda a,b: a+b   # it only evaluate single expression

result=f(5,6)

print(result)


## comparison between normal function and lambda
## normal function method 

nums =[6,8,2,4,5,7,3,9,21,45,98,36,57,78,73,91,19,85,93]



def is_even(n):
     return n%2==0

print(list(filter(is_even,nums)))
#[6, 8, 2, 4, 98, 36, 78]

## by lambda 
print(list(filter(lambda n:n%2==0 ,nums)))
#[6, 8, 2, 4, 98, 36, 78]

   ## doubles the value by map 
print(list(map(lambda n:n*2,nums)))   
#[12, 16, 4, 8, 10, 14, 6, 18, 42, 90, 196, 72, 114, 156, 146, 182, 38, 170, 186]
   
    ## add all value of the list by use of reduce
from functools import reduce
print(reduce(lambda a,b: a+b,nums)) 
