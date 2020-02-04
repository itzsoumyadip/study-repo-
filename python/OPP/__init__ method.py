# All classes have a function called __init__(), which is always executed when the class is being initiated.
# Use the __init__() function to assign values to object properties, or other operations that are necessary to do when the object is being created:



class computer:
 # Note: The __init__() function is called automatically every time the class is being used to create a new object.
    def __init__(self,argu1,argu2):
        self.argu1 = argu1
        self.argu2 =  argu2

    def config(self):
        print(' config is ', self.argu1 ,self.argu2)
    def setter(self,argu,argu2):
        self.argu1= argu
        self.argu2 =argu2



com=computer('intel','i5')     # value is pass in __init__() method  like constructor
com.config()
 #config is  intel i5
com2=computer('ryzen',5)
com2.config()
 #config is  ryzen 5

# change the value of member varible by function 
com.setter('intel','i7')
com.config()
 #config is  intel i7


#Modify the  value of member varible by usinig member variable

com.argu1=" ryzen"
com.config()
# config is   ryzen i7


