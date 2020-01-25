
#In Python a function is defined using the def keyword:

def add(x,y):
    c=x+y
    return c

result= add(5,4)
print(result)
# 9

# python result can return more then one value 

def add_sub_mul(x,y):
    su=x+y
    sub=x-y
    mul=x*y
    return su,sub,mul

result= add_sub_mul(5,4)
print(result)  #(9, 1, 20)

#  each value in differnt variable

result1,result2,result3= add_sub_mul(5,4)
print(result1,result2,result3)
#9 1 20