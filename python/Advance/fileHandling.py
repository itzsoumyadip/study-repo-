f = open('for_handling.txt','r')  # r for opening the file in read mode 
 
# print(f.read())          ## WILL print entire file

# manualy printing line  total no. of redline() == total no.of line to be printed in console  
print(f.readline(),end="") # test file !! ### for readline() pointer will start pointing from beginning of the file line, (after that pointer will move to next line )

print(f.readline())   

# this is the first file that wre used for file handling with python

f.close() # file close 

f1 = open('secondFile','w') # this will create a file name secondFile if it's not already exist then only ,, in write mode

f1.write('hi am written by fileHandling.py program')
