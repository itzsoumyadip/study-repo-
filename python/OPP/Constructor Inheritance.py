class A:
    def __init__ (self):
         print('INIT A ')
    def fun1(self):
        print('from fun1 WOrking')
    def fun2(self):
        print('from fun2 WOrking')

class B(A):
    def __init__(self):  # When you add the __init__() function, the child class will no longer inherit the parent's __init__() function.
                         # The child's __init__() function overrides the inheritance of the parent's __init__() function.
        
# To keep the inheritance of the parent's __init__() function, add a call to the parent's __init__() function:
        #A.__init__(self)  ## by calling parent class
        
 # Python also has a super() function that will make the child class inherit all the methods and properties from its parent:
        super().__init__()
        # By using the super() function, you do not have to use the name of the parent element, it will automatically inherit the methods and properties from its parent.
        print('INIT B')  
    def fun3(self):
        print('from fun3 WOrking')
    def fun4(self):
        print('from fun4 WOrking')


a =A()  # INIT A

b=B()  # INIT A  ## WHEN __init__(self) method is not there in class B 
b=B()  # INIT B  ## WHEN __init__(self) method there in class B 
       # if you create object of Sub class it will first try find init of Sub class if it is not found then it will call init of Super class

# To keep the inheritance of the parent's __init__() function, add a call to the parent's __init__() function:
b=B() 
# INIT A
# INIT B

# Python also has a super() function
b=B()
# INIT A
# INIT B