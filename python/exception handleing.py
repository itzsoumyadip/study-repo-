a =5 
b = 2

try:
    ## can perform any operation in try block 
    print('resource Open') 
    print(a/b)  # if (5/0) ZeroDivisionError
    k=int(input('enter a number'))
    print(k)
except ZeroDivisionError as Z: # ZeroDivisionError  is a error class   # specify the specific type of exception 
    print('hey you cannot divide a Number by zero :',Z)  # with the help of  Z error will be print out 

except ValueError as V:   # specify the specific type of exception 
    print('Invalid Input')   # Invalid Input if int is not enter

except Exception as e:   # Exception can handle any kind of exception 
    print('some thing went wrong')

finally:         ## finally  block will be executed if we ger error as well as if we don't ger the error
    print('resources Closed')