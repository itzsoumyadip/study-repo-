## to change  recursion limit 
import sys

print(sys.getrecursionlimit())  #Return the current value of the recursion limit
#1000

## change the limit 
sys.setrecursionlimit(2000) # change  value of the recursion limit 
#2000  

i=0
def greet():
    global i
    i+=1
    print('hellow',i)
    greet()

greet()  # hellow 1996 then  error 
   