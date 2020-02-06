a = 5
b = 6

print(a+b)  ## synthetic Sugar --> it try to simplify the code for user
#11

# this is what is happening  behind sence 

print(int.__add__(a,b )) 
# 11



a = '5'
b = '6'

print(a+b)  ## synthetic Sugar --> it try to simplify the code for user
#56

# this is what is happening  behind sence 

print(str.__add__(a,b )) 
#56