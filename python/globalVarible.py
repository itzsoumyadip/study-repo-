a=0
b=10
def counter():
   
   global a           # global variable # declaring a as global so any change in a inside function will effect outside a
   globals()['b']     # global function it help to access the global varible and also allow to create same Global Named varible as local varible
   b=10  # both global and local varible have same name coz of using globals()['varible name'] function
   for i in range(10):
       a+=1
       globals()['b']-=1
       print("hellow",i,"and", b)
       print('iner a',a)
       print('global b= ',globals()['b'])
            

counter()

print("outside a",a)   
print("outside a",b)   