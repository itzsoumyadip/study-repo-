#|  Decorators in Python
#|    In Python, functions are the first class objects, which means that –
#|
#|   Functions are objects; they can be referenced to, passed to a variable and returned from other functions as well.
#|    Functions can be defined inside another function and can also be passed as argument to another function.
#|   Decorators are very powerful and useful tool in Python since it allows programmers to modify the behavior of function or class. Decorators allow us to wrap another function in order to extend the behavior of wrapped function, without permanently modifying it. 


#|    In Decorators, functions are taken as the argument into another function and then called inside the wrapper function.


def div(a,b):
    print(a/b)

def smart_div(func):  # taking a function as input # here div funtion is pass here  

    def inner(a,b):    # another function  # here inner  function taking argument from div(a,b) 
        if a<b:
            a,b=b,a
        return func(a,b)   # returning the  function  # div( ) here
    return inner        # returning the inner  

div1=smart_div(div)  # div1 can also name as div eg div=smart_div(div) is also valid
 
div1(2,4)   
#2