import sys 
sys.path.append('/Users/hacky/Desktop/Online downlad/code/study-repo--master/python/libary')

from cs50 import get_int


pos=0


def binarySearch(list,n):
    
    lower=0
    upper=len(list)-1  #total number of element in the list  -1 (for getting the last index number )
       
    
    
    while lower<=upper:
        mid= (lower+upper) // 2
        if list[mid]==n:
            globals()['pos']=mid
            return True
        else:
            if list[mid]<n:
               lower=mid+1  
            else: 
               upper=mid-1
    return False                   
 


list=[6,3,85,9,7,95,45,98,87,9,45,54,7,865,612,9,8,7,6,5,4,3,2,1,98,97,87,64,31,25,58,36,69,14,47,74,85,96,63,41,75,95,35,15,91,73,67,68,62]
#list=[34,43,32,86]
list.sort()
print(len(list))


n=get_int("enter a number to search :")  # this number will be search  




if binarySearch(list,n):
    print("Found: "+ str(n) + " at position: " +str(pos+1))
else:                           # if number is not found 
    print(f'Sorry :{n} is not present in the list')
print("Bye")