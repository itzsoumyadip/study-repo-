#include <bits/stdc++.h>
using namespace  std;

int main() {
    ofstream  fout ;
      ifstream fin;
     char ch;
     fout.open("myfile1.txt",ios::ate);
     fin.open("myfile.txt");
    
     ch =fin.get();
   
     while (!fin.eof())
     {   
         fout<<ch;  
         cout<<ch;
         ch =fin.get();
     }
      cout<<"\n file copy is copied \a"<<endl;
    fout.close();
    fin.close();

 ifstream finz;

 char cz;
     finz.open("myfile1.txt");
     
     cz =finz.get();

     while (!finz.eof())
     {
         cout<<cz;
         cz =finz.get();
     }

}
