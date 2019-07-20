#include <bits/stdc++.h>
#include<conio.h>
using namespace std;
void putInfo();
void dispalay();
void save();
void open();
long long int ph_no;

string name;
string address;

int main() {

    putInfo();
    // dispalay();
     save();
    open();
getch();


}
void putInfo() {
    cout << "enter Phone number ";
    cin >> ph_no;
    cout << "enter the name of the bride";
    getline(cin, name);
    getline(cin, name);
    cout << "enter the the addreass of bride" << endl;

    getline(cin, address);
}


void dispalay() {
    cout << "phmone no:--" << ph_no << "\n  name " << name << "\naddreas " << address;
}



void save() {
    fstream fout;
    fout.open("weedingContact.txt",ios::app);
    fout.seekg(0);
    fout << ph_no << endl;
    fout << name << endl,
        fout << address << endl;
    fout.close();
}



void open() {
    ifstream fin;
    fin.open("weedingContact.txt");

    while (!fin.eof()){
        fin >> ph_no;
        getline(fin,name);
        getline(fin,name);
       getline(fin,address);
        cout << "phone no:--" << ph_no << "\n  name " << name << "\naddreas " <<address<<"\a"<< endl;
}

    fin.close();

}
