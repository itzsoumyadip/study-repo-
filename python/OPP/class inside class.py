##  You can create object of inner class inside the outer class  .eg ->> self.lap = self.Laptop() 
##                or 
##  You can Create object of inner class outside the outer class provided you use outer  class name to call it . like  objectname = OuterClassNAME.InnerClass name






class Student:   # outer class
     def __init__(self,name,rollno): 
         self.name=name
         self.rollno = rollno
         self.lap = self.Laptop() # object creation for laptop class (inner class)
     def show(self):
         print(self.name,self.rollno)

     class Laptop:       # inner class    this class will be only use by student class

         def __init__(self):
             self.brand = 'HP'
             self.cpu  =  'i5'
             self.ram  =   8 
         
         def setter(self,brand,cpu,ram):
             self.brand = brand
             self.cpu  =  cpu
             self.ram  =  ram 

         def show(self):
             print('brand',self.brand,'cpu',self.cpu,'ram',self.ram)    
               
s1= Student('Navin',2)
s2 =Student('Jenny',3)

s1.show()


##      operation with inner class 

s1.lap.setter('dell','i9',16)   # MODIFYING VALUE OF INNER  CLASS 
s1.lap.show()   #brand dell cpu i9 ram 16
  
## creating laptop object from student object 
lap1 = s1.lap  # new object created from inner class 
lap2 = s2.lap

print(id(lap1)) # 13500048   
print(id(lap2)) # 13500144


lap1.show()
# brand dell cpu i9 ram 16  ##  direct connecion with s1 object of student class (outer class)
lap2.show()
# brand HP cpu i5 ram 8


## directly created laptop object 
laa = Student.Laptop()  # then we dont need this line in outer class -->> self.lap = self.Laptop() 
laa.setter('lenovo','i7',6)
laa.show()
# brand lenovo cpu i7 ram 6