#include <iostream>

using namespace std;

int main()
{
     int num = 100;
      int flag=0;
     
      for(int i=2;i<num;i++)
       if(num%i==0){
         cout<<num<<" Number is not prime";
          return 0;
       }
  
      cout<<"this number is prime";
    
    
 
   
   return 0;
}