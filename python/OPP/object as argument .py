class Person:          
    def __init__(self,argu1,argu2):
        self.argu1 = argu1
        self.argu2 =  argu2
   
   
    def compare(self,other):       ## here self is  taking the calling object and other takes the object that are passed as argument
         if self.argu2==other.argu2:
            return True
         else:
            return False   

 
        


  
       


P1=Person('navin',23)
P2=Person('rishi',25)


if P1.compare(P2):  
    print('they are same')
else:
    print('they are not same')    
 

 #they are not same