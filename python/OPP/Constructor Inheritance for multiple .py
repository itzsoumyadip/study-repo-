class A:
    def __init__ (self):
         print('INIT A ')
    def fun1(self):
        print('from fun1 WOrking')
    def fun2(self):
        print('from fun2 WOrking')

class B(): 
    def __init__(self):
         print('INIT B')  
    def fun3(self):
        print('from fun3')
    def fun4(self):
        print('from fun4')

class C(A,B):
    def __init__(self):
        super().__init__()
        print('INIT C')
    def fun5(self):
        print('from fun5')
    def fun6(self):
        print('from fun6')        

c=C()        
#INIT A   ## no INIT B her because of MRO 
#INIT C 

## MRO ->> Method Resolution Order  

# itz call  clalling class then left parent of the class