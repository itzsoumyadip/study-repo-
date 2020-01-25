import numpy


# adding 5 with  each of the array vlaue

arr=numpy.array([2,3,4,5,6])
arr= arr+5 
print(arr)


## add  two array element with each element

arr=numpy.array([2,3,4,5,6])
arr1=numpy.array([5,6,7,9,1])
arr3= arr+arr1 
print(arr3)



## sum
print(sum(arr3))

## min 
print(min(arr3))

## concatenate

print(numpy.concatenate([arr,arr1]))

##    array copy in numpy 
arr=numpy.array([2,3,5,4,5,8,9])
arr1=arr       # copying or aliasing
print(arr1)
#[2 3 5 4 5 8 9]
print(id(arr1))
# 115584600         pointing same location 
print(id(arr))
# 115584600
 
# create a new array from  previous one     shallow copy
arr=numpy.array([2,3,5,4,5,8,9])
arr1= arr.view()  # view create a shallow copy
print(arr1)
#[2 3 5 4 5 8 9]
print(id(arr1))
# 115510552        differnt addres location 
print(id(arr))
# 10563656

  # shallow why?
arr1[2]=10
print(arr1)  #[ 2  3 10  4  5  8  9]        same change 
print(arr)   #[ 2  3 10  4  5  8  9]


 ### DEEP COPY 
arr=numpy.array([2,3,5,4,5,8,9])
arr1= arr.copy() #deep copy  
print(arr1)
#[2 3 5 4 5 8 9]
print(id(arr1))
#61054232                   differnt addres location 
print(id(arr))
#61054192

arr1[2]=10
print(arr1) #[ 2  3 10  4  5  8  9]       # only arr1 value is change 
print(arr)  # [2 3 5 4 5 8 9]