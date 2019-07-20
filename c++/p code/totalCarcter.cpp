#include<iostream>
                         // calculte total no of characters i
using namespace std;
int main(){
char c;              
int count=0;
cout <<"enter a line and enter enter key at last to calulate";
 cin.get(c);
 cout<<"see "<<c<<endl;
 
 while (c !='\n'){
      cout<<c;
      count++;
      cin.get(c);
 }
  cout<<"\n number of characrter="<<count;
  return 0;
}


