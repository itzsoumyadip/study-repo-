#include <iostream>

using namespace std;

class a{
    
int a,b;    
public:
  
  void setdata(){
       
       cout<<"enter 2 value"<<endl;
       cin>>a>>b;
       
       }
    
    void add (int &sum){
        
       sum = a+b;
        cout<<"print from add function"<<" "<<sum<<endl;
    }
    
};


int main()
{
 int sum ;
  a c1;
  c1.setdata();
  c1.add(sum);
 
 
   cout << sum << endl; 
   
 