
def fibonaci(n):
    a=0
    b=1
    
    if  n<=0:
        print('you enter a negative number')
    elif n==1:
        print(a)
    else:
        print(a)
        print(b)
        for i in range(2,n):
            c=a+b
            a=b
            b=c
            if(c>n):       # this position checks value is inside 100 or not 
              break
            print(c)            



fibonaci(100)           # finding factorial upto 100   