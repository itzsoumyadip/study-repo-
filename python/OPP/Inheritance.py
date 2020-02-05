class A:
    def fun1(self):
        print('from fun1')
    def fun2(self):
        print('from fun2')

class B(A):  # single 
    def fun3(self):
        print('from fun3')
    def fun4(self):
        print('from fun4')

class C(B):  # multilevel 
    def fun5(self):
        print('from fun5')
    def fun6(self):
        print('from fun6')


class D():
    def fun7(self):
        print('from fun7')
    def fun8(self):
        print('from fun8')

class E(C,D):     ## multiple inheritance
    def fun9(self):
        print('from fun9')
    def fun10(self):
        print('from fun10')




a=A()
b=B()
c=C()
e=E()

a.fun2()## 

b.fun2() ## access to all  from fun1..fun4

c.fun2() ## access to all  from fun1..fun6
c.fun4()

e.fun8()
e.fun1()
# due to multiple  e object have access to all   e.fun1....10  method
 

        