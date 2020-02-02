class Computer:          # class 
    def config(self):         ## attributes   # self is the object which are passing 
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