f = open('for_handling.txt','r')  # r for opening the file in read mode 
 
# print(f.read())          ## WILL print entire file

print(f.readline(),end="") # test file !! ### (after that pointer will move to next line )
print(f.readline())   # this is the first file that wre used for file handling with python


f1 = open('secondFile','w') # this will create a file name secondFile if it's not already exist then only ,, in write mode

f1.write('hi am written by fileHandling.py program')
