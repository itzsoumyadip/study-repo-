class Computer:          # class 
    def config(self):         ## attributes   # self is the object which are passing 
    # The self parameter is a reference to the current instance of the class, and is used to access variables that belongs to the class.
    # it does not have to be named self , you can call it whatever you like, but it has to be the first parameter of any function in the class:
        print('from class computer')   # behaviour or method 

com=Computer()        ##com is the instance of class  computer  ,and  computer()
com2=Computer()    ##com2 is the instance of class computer

com.config()    # behind the  scene config() will take com as parameter and pass it like config(com)
# from class computer

## another way of calling class function 
Computer.config(com)   #oject com is pass as argument
#from class computer


com2.config()
#from class computer 


print(type(com))
# <class '__main__.Computer'>   