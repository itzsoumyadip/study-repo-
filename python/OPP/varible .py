## class have two types of varible 
 # 1. class variable -: value will be same for all object 
 # 2. instance variable ::-- value will be different for all object 


class car:
     wheels =4      # class varible or static variable  ##  
     def __init__(self,arg1,arg2):     
         self.mil = arg1       ##    Instance varibales  
         self.com = arg2    ##    Instance varibales 

     def config(self):
        print('milage ',self.mil,' company ', self.com,' wheel ',car.wheels)


c1=car(5,'BMW')
c2=car(3,'AUDI')

# modifying Class varibles 
car.wheels = 10


## modifying Instance varialbe
c1.mil =8

c2.mil=10


## value print 
c1.config()
#milage  8  company  BMW  wheel  10

c2.config()
#milage  10  company  AUDI  wheel  10


## Delete Objects

del c2 #Delete the c2 object:


# NameError: name 'c2' is not defined
