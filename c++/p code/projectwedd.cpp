#include<bits/stdc++.h>
#include<conio.h>
 //#include<iostream>

using namespace std;
#include<fstream>
class Wedding{

    long long int  ph_no;
    
   string  name;
   string  address;
    public:
     
    void putInfo()
    {
        cout<<"enter Phone number ";
        cin>>ph_no;
        cout<<"enter the name of the bride";
      getline(cin,name);    
      getline(cin,name);
         cout<<"enter the the addreass of bride"<<endl;

         getline(cin,address);
    }
  void dispalay() {
        cout<<"phmone no:--"<<ph_no<<"\n  name "<<name<<"\naddreas "<<address;
  }
  // void save(){
  //   ofstream fout;
  //    fout.open("weedingContact.txt",ios::app);
  //    fout<<ph_no<<endl;
  //    fout<<name<<endl,
  //    fout<<address<<endl;
  //    fout.close();
  //}
  void open(){
     ifstream fin;
     fin.open("weedingContact.txt");
     
    while(fin.eof() != 0){
     fin>>ph_no;
     fin>>name;
     fin>>address;
     cout<<"phmone no:--"<<ph_no<<"\n  name "<<name<<"\naddreas "<<address;
  }
      
   fin.close();
    
  }
};


int main(){
    Wedding w;
    //w.putInfo();
    // w.dispalay();
    //w.save();
    w.open();
    // w.dispalay();


return 0;
}









