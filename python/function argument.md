# TYPES OF ARGUMENT AND THERE TYPES 

**ARGUMENTS**
1.FORMAL ARGUMENTS (parameter)
2.ACTUAL ARGUMENTS (arguments)  
``` python
    def add(a,b): #formal argument
        c=a+b
        print(c) 
add(5,4)   # acual argument   coz we are passing something
```
###### **NOW ACTUAL ARGUMENTS ARGUMENTS TYPES**
1. Actual
    * Position
    * Keyword
    * Default
    * varible Length


**Position**:- 


**Keyword**:- if we dont know the sequence or position of formal argument then KEYWORD is come to our resque 
``` python 
def person(name,age):
    print(name)  #jon doe
    print(age)   #28
  

person(age=28,name='jon doe')  # here "name" and "age" are the keyword (same as formal arguments(parameter) ) , they are specify at the time of passing the value , 
```
**Default**--> default value is assign to formal argument. if value is pass from the actual argument then then it overwrite the default value .
```python 
def person(name,age=18):   # default argument
    print(name)  #jon doe
    print(age)   #18

person('jon doe')        # only one value is pass
``` 


**varible Length**->> in function length of argument is not confirm
```python
def sum(a,*b):  # 5 is assign to "a" ,and "3,5,3" is assigned to *b as tuple
    print(a) #5
    print(b)  #(3,5,3)

sum(5,3,5,3)
```

 **keyworded Varible Length argument = takes  both keyworded and Varible length to pass multiple data with keyword in actual argument**
```python
def person(name,**data):
    print("")
    print(data)
    for i,j in data.items():
        print(i,j)

person('navin',age=28,city='Mumbai',mob=12345678)
```