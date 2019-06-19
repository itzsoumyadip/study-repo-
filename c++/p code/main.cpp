#include<iostream>
#include<conio.h>
#include<stdio.h>


 class complex {

       int a;
       int b;
public:
      void showdata(){
       std::cout<<"value of a ="<<a << "and value of b is " <<b<<std::endl;
      }
      void getdata(int x, int y){
         a=x; b=y;
       }


   //BINARY OPERATOR

    complex operator+ (complex c) {

        complex temp;

        temp.a=a+c.a;
        temp.b=b+c.b;

         return(temp);

    }

    //UNIRAY OPERATOR
     complex operator -(){

         complex temp;

         temp.a = -a;
         temp.b= -b;
         return(temp);
     }


 };
int main(){

    std::cout << "hellow world"  << std::endl;

    std::cout<<"Enter the value of a and b";
    int a,b;

    complex c4,c2,c1,c3;
    std::cin>>a>>b;   // c= std::cin>>a>>b;   ERROR

    c1.getdata(a,b);
    std::cin>>a>>b;
    c2.getdata(a,b);
   // c1=c2;



    c3=c1+c2;
    c3.showdata();
    c4=-c3;
    c4.showdata();
}

