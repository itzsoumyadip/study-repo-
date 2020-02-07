## python does not support method overloading

## but we can do some trick 

class Student:
    def __init__(self,m1,m2):
        self.m1 =m1
        self.m2 =m2

    def sum(self,a=None,b=None,c=None):   ## or use varible Length argument 
        s =0

        if a!=None and b!=None and c!=None:
            s = a+b+c
        elif a!=None and b!=None:
            s= a+b

        else:
            s=a
        return s


s1=Student(85,21)

print(s1.sum(4,8,8))
