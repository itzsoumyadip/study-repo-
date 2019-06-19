// #include<fstream>
// #include<iostream>
#include<bits/stdc++.h>
#include<conio.h>
using namespace std;
//void file_handleing(char *f1, char *f2);

int main(){
   file_handleing("myfile1.txt","myfile2.txt");
   cout<<"file is copied";
   getch();  
     return 0;
}





void file_handleing(char *f1, char *f2){
        ofstream fout;
        ifstream fin;
        char ch;
        fin.open(f1);
        fout.open(f2,ios::ate);
        
        
        ch=fin.get();
        while (!fin.eof()){
                fout<<ch;
                ch=fin.get();

        } 
        fin.close();
        fout.close();
        
}



