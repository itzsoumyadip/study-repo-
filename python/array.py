from array import*

              
 # in array all the value have to be in same type 
# array in python , dont have fixed size means they are flexible 
vls = array('i',[5,34,54,23,26,32,2])   ## i = unsigned int 


# copying array

newArr = array(vls.typecode,(a for a in vls))    # fetch one value form vls and assigned in array 

for e in newArr:
    print(e,end=" ")
# 5 34 54 23 26 32 2
print()

# size of an array
print(vls.buffer_info() )  
# (20113184, 7)
# (address ,size) 



# acessing array 
for i in vls: 
    print(i)


print(vls[1])


while i<len(newArr):
    print(newArr[i])
    i+=1


# array  data type 

print(vls.typecode)   # properties


## reversing array 
vls.reverse()   
print(vls)
#array('i', [2, 32, 26, 23, 54, 34, 5])


## manual 


l=len(vls)
vls= array(vls.typecode,[vls[i-1]  for i in range(l,0,-1)])   # 
print(vls)





## taking value from user 


arr = array('i',[])

l=int(input("Enter the length of the array"))

for i in range(l):      # it loop == length specified by the user
      v=int(input("ENTER THE NEXT VLAUE"))   # value from user 
      arr.append(v)  # append at the end of the array
       

print(arr)


## serching for the index no
## manual method
i=int(input('enter the value for index no'))
k=0
error=0
for e in arr:
    if e==i:
        error+=1
        break   # if value is match with array value ,then loops end
    k+=1 
 
if error!=0:
    print(k)  
else:
    print('sorry the value you are looking for is not avilable ')
## by python inbuilt function 

print(arr.index(i))






