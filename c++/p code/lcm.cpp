#include <iostream>

using namespace std;

int main()
{
     int num = 100;
    
      int arr[100];
     int max=0;
      for(int i=1;i<num;i++)
          if(num%i==0){
             arr[max]=i;
             max++;
          }
    
    for(int j =0;j<max;j++){
        cout<<arr[j]<<"\t";
    }      
    
    
int total= sizeof(arr)/sizeof (arr[0]); 
cout <<"\n"<<total;
   
   return 0;
}