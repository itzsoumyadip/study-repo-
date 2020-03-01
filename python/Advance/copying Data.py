f=open('copy.txt','r')  # copy file open 

f1=open('paste','w')   # paste file open

for data in f:         # data  start copying from copy file to paste file
    f1.write(data)

f1.close() # close the paste file 
f.close() # close the  copy file

f2=open('paste','r')  # open the paste file 
print(f2.read())
f2.close()

"""  this file is use by copying Data.py program
for copying and pasting example
form copy.text to past file

tada!! 
"""