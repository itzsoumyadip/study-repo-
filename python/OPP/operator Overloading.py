class Student:

    def __init__(self,m1,m2):
        self.m1 = m1
        self.m2 = m2

    def __add__(self,other):   ## overloading the add method 
        m1 = self.m1 + other.m1  # calling object + passing object 
        m2 = self.m2 + other.m2  #

        s3 = Student(m1,m2)     # new object creation with passing (m1,m2) 

        return s3    
    def __str__(self):
        return '{} {} ' .format(self.m1,self.m2) 
    
    def __gt__(self,other):       
        r1 = self.m1 + self.m2  # r1 save as int 
        r2 = other.m1 + other.m2

        if r1 > r2:
            return True
        else:
            return False      


s1 = Student(58,69)
s2 = Student(60,65)   

s3 = s1 + s2 # add due to operator overloading
 
print(s3.m2) 
 # 134 

   
print(s3)  #print with out overloading
# <__main__.Student object at 0x013DFCB0> 

## print with __str__() overload
print(s3)
# 118 134
print(s3.__str__())
# 118 134


# >  overloding 
if s1 > s2:
    print('s1 Wins')
else:
    print('s2 Wins')   

# s1 Wins     

   