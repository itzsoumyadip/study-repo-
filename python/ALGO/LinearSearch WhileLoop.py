import sys 
sys.path.append('/Users/hacky/Desktop/Online downlad/code/study-repo--master/python/libary')

from cs50 import get_int


pos = 0  #for storing the searched  number's index 

list = [9,8,7,6,5,4,3,2,1,98,97,87,64,31,25,58,36,69,14,47,74,85,96,63,41,75,95,35,15,91,73,67,68,62]

print(len(list))
n=get_int("enter a number to search :")  # this number will be search  




def Linear(list,n):          # liner Search method 
    global pos
    i = 0
    
    while i< len(list):
        if list[i] == n:        # checking if list value is same with searched value
            pos=i               # assigning the value of i(index number) to the global varible pos 
            return True         # if found loop ends by returning True
        i = i+1                 # increment of the i   
    return False




if Linear(list,n):       # function calling in if          # if the number is found in the list 
    print("Found: "+ str(n) + " at position: " +str(pos+1))
else:                           # if number is not found 
    print(f'Sorry :{n} is not present in the list')
print("Bye")


