# python does not support call by value or call by reference 

# for immutable data type , new memory block will create for assigning  new value  by the function 


def update(x):
    print(id(x))  # 1476093216  # x is pointing to the  same address of a and 10  
    x=8            # x now pointing towards new address of 8
    print(id(x))   #1476093184
    print('x',x)   # x  8

a=10
update(a)    #value 10 is passed not valriable like call by value 
print(id(a)) #1476093216  
print('a',a)  #a 10




# for mutable both inside and outside varible value will be change upon assigning new value


def updates(lst,x):
    print(id(lst))  #6637048
    x=80
    lst[2] = x
    print(id(lst))  #6637048
    print('lst',lst)  #lst [2, 3, 80, 4, 3, 5

lst=[2,3,1,4,3,5]
print('main list',lst)    #main list [2, 3, 1, 4, 3, 5]
print(id(lst))  #6637048     
updates(lst,80)  
print('main list',lst)   #main list [2, 3, 80, 4, 3, 5] # main list change because list is muteable data type
    
