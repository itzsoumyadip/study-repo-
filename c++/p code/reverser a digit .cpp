#include <iostream>

using namespace std;

int main()
{    int reverse=0;
     int rem;
     int num=435;
     
     while(num!=0){
         
         rem = num %10;
          reverse = reverse*10+rem;
         num = num / 10; 
     }
      cout<<reverse;
    return 0;
}