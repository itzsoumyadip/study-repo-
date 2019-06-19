

                       //   SUM OF    COMPLEX NO



#include<iostream>
//#include<stdio.h>
//#include<conio.h>
//#include <iostream>
//#include <stdlib.h>

class complex {

     int a, b;

public :
     void setData(int x,int y){
        a=x, b=y;
    }
    void showData(){
    std::cout << "\n a="<<a<<" "<<"b="<<b;
//    std::cout<<"value of c3 is "<<c3;
    }
   complex  add(complex c){
      complex temp;
       temp.a= a+c.a;
       temp.b= b+c.b;
       return(temp);
   }



};


/* MAIN PROGRAM */
#include <iostream>
#include <stdlib.h>
int main(){

  system("color b9");
complex c1,c2,c3;

c1.setData(3,4);
c2.setData(2,3);
c3= c1.add(c2);
c1.showData();
c3.showData();
}
