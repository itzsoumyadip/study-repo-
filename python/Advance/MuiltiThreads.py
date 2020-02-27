from time import sleep
from threading import *   # importing form thread module


class Hello(Thread):   # creating subclass of thread class
    def run(self):
        for i in range(5):
            print("Hello")
            sleep(1)

class Hi(Thread):   # creating subclass of thread class
    def run(self):
        for i in range(5):
            print("Hi")
            sleep(1)  ## it will wait for 1 second ( here while waiting for 1sec another thred  can run  )

t1=Hello()     
t2=Hi()

t1.start()    ## .start(); INTERnaly it calling run method from the thread module 
sleep(0.2)   ##to aviod collision ( HelloHi ) unsync
t2.start()  ## calling .start() method ,so that we can run the two method parallely 


t1.join()  ## asking main thread to wait for t1 and t2 to join then go to next step 
t2.join() 




print("Bye")






"""              MAIN THREAD  -> IT RUN ALL STATEMENT 

at the time of object delcaration  
                          
                          Manin Therd 
                             | 
                             V
                        ___________
                        V         V   
                       t1         t2

***************************
after calling t1.start()
it become  3 thread 

    1 ) MAin thread
    2) t1 
    3 ) t2 

**********************************



now print("bye") go under Main thread


                        
"""