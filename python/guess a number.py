import sys 
sys.path.append('/Users/hacky/Desktop/Online downlad/code/study-repo--master/python/libary')

import random
from cs50 import get_int,get_string

secretNumber =random.randint(1,20)   # a random number will be genarate
                                    #random.randint() A random integer within the given range as parameters.


name=get_string("Hello, What is your name ?")
 
print(f"Well {name}, I am thinking of a number between 1 and 20")


for i in range(1,7):   # number of times user will get chance is 6
        guessnumber = get_int("Take a guess ")  # take a number from user 
        if guessnumber < secretNumber:
            print("no you are wrong : you have enter smaller number  try gessing again")
        elif guessnumber > secretNumber:
            print("no you are wrong : you have enter greater number  try gessing again")
        else: 
            break  # if the user guess the correct number 
         
if guessnumber == secretNumber:
    print("YEA! you guess is 100% correct Number is: " + str(guessnumber) + " indeed. you have taken "+ str(i)+ " times to guess it" )        
else:
    print("your guess is too High")
    print("your guessing number is: "+ str(secretNumber))  # if user unable to guess the nuber


