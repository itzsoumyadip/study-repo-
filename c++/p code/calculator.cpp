#include<iostream>
#include<conio.h>
#include<stdio.h>
using namespace std;



class calculator{

   public:
      int calculate (int, int, char);
};



int main(){
cout<<"welcome to my calculator"<<endl;
int a,b,result;
char oper;
cout<<"enter the value to be calculator ";
cin>>a>>b;
cout<<"enter operator which want to operate";
cin >>oper;
calculator c; 
result= c.calculate(a,b,oper);
std::cout<<"after calculation result is= "<<result;

}
  int calculator::calculate(int x , int y,char oper ){


   switch(oper)
   {

     case '+':
         return( x+y);
       break;
     case '-':
          return (x-y);
         break;
     case '*':  
          return (x*y);
         break;
      case '/':
          return (x/y);
      default:
          return 0;
          getch();
}
}

