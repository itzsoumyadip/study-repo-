import sys 
sys.path.append('/Users/hacky/Desktop/Online downlad/code/study-repo--master/python/libary')

import random
from cs50 import get_int

secretNumber =random.randint(1,5)   # a random number will be genarate

for i in range(1,7):   # number of times user will get chance is 6
        guessnumber = get_int("guess a number")  # take a number from user 
        if guessnumber < secretNumber:
            print("no you are wrong : you have enter smaller number  try gessing again")
        elif guessnumber > secretNumber:
            print("no you are wrong : you have enter greater number  try gessing again")
        else: 
            break  # if the user guess the correct number 
         
if guessnumber == secretNumber:
    print("YEA! you guess is 100% correct Number is: " + str(guessnumber) + " indeed. you have taken "+ str(i)+ " times to guess it" )        
else:
    print("your guessing number is: "+ str(secretNumber))  # if user unable to guess the nuber


