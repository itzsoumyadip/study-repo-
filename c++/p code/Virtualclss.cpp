#include<iostream>
using namespace std;
class base
{
private:
    /* data */
     
public:
  virtual void  print(){
      cout<<"this is a virtual function  print from base"<<endl;
  }
    void show(){
        cout<<"this is a virtual function  show from base"<<endl;
    }
     
};
 

class derived : public base
{
private:
    /* data */
public:
  void print(){
     cout<<"this is a virtual function  print from derived"<<endl;
  }

  void show(){
      cout<<"this is a virtual function  show from derived"<<endl;
  }
};
   int main (){

       base *bptr;
       derived d;
       bptr = &d;
       bptr->print();   /// late binding 
       bptr->show();  ///early binding 
   }