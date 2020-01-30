def factorial(n):
    f=1
    for i in range(1,n+1): # 1 to n+1 (if 4 +1=5)for rannge() method 
        f=f*i
    
    return f

x=4 

result =factorial(x)


print(result)

## or  use math.factorial()

# by recursion 
i=0
def facRec(x):
    global i 
    if(x==1):
        return 1
    else:
        x=x*facRec(x-1)
        i+=1  # number of times loop run
        print('i',i)
    return x
   
    
res=facRec(7) 
print(res)   

