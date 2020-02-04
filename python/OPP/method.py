# class have 3 type of method variable
# 1 . Instance methods 
# 2.  class methods 
# 3.  Static methods     


class Student:
    school = 'Telusko'

    def __init__(self,m1,m2,m3):
        self.m1=m1
        self.m2=m2
        self.m3=m3
    # instance method
    def avg(self):
        return ((self.m1+self.m2+self.m3)/3)
    def get(self): # Accesssor Method  -: for  fetching the value 
        return self.m1    
    def set_m1(self,value): # Mutator Method  -: for accessing the value 
         self.m1 = value
   

   ## class method  for working with class variable 
    @classmethod
    def info(cls):
       print(cls.school) 
    # static method     it us useful to use with other class object
    @staticmethod
    def static():
        print('This is Student Class.. in abc module') 




# object creation 
s1 =Student(23,34,54)
s2 =Student(34,75,34)

## calling  instance method 
print(s1.avg())
#37.0

s1.set_m1(23)
print(s1.get())
#23

##calling class method 
Student.info()
#Telusko

## calling static method 
Student.static()
#This is Student Class.. in abc module