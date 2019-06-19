#include<iostream>
#include<stdio.h>
#include<conio.h>

 using namespace std;
class A {
  private:
    int a ;
  protected:   // proctacted member ;
    void setValue(int x){
          a=x;
    }   
  public:
    void showData(){
         std::cout<<a;
     } 
};
class B: public A {
  
 public:
    void setData(int x)
     { setValue(x);}
     
     
};
// class C:public B {

//  public:
//       void showdata(){
//           showData();
//       }
// };

int main (){

B obj;
//C obj1;
obj.setData(5);
//obj1.showdata();
obj.showData();

getchar();
     getch();
     std::cin.get();
      return 0;

 }

