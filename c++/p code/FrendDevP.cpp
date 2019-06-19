#include<bits/stdc++.h>
#include<conio.h>

using namespace std;



 class B;
 class A {
 	 int a;
 	 
 	 public:
 	  void  friend getdata(A&,B&);
 	  void friend  add(A&,B&);
 };
  class B{
  	int b;
  	 public:
 	  void  friend getdata(A&,B&);
 	  void friend  add(A&,B&);
  	
  };
     
     
     
     void getdata(A& O1,B &O2){ 
     	 cout<<"enter A && B class value\n ";
     	 cin>>O1.a>>O2.b;
     	
     }
     
     
     void add(A &Oa,B &Ob){
     	
     
     	cout<<"adition of class A && B\n"<<Oa.a+Ob.b<<"\n \a";
     }

int main (){
	
	A a1,a2;B b1,b2;
	
	getdata(a1,b1);
	
	add(a1,b1);
	
	
	 getdata(a2,b2);
	
	add(a2,b2);
	
	getch();
	return 0;
}
    