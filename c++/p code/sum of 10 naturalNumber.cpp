#include <iostream>

using namespace std;

int main()
{   int n;
     cout<<"enter a number to reverse:"<<endl;
      cin>>n;
      cout<<n<<endl;
    int a[n];
      int sum=0;
    for(int j=0;j<=10;j++){
        a[j]=j;
    }
        
  
    
   for(int i=0;i<=10;i++){
         sum=sum+a[i];
       
   }
   
   cout<<sum;
    return 0;
}