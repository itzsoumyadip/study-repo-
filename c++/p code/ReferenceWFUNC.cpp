#include <iostream>
#include<conio.h>
using namespace std;

void manipulate(double &pValue) // pass by refernce 
{
	cout << "2. Value of double in manipulate: " << &pValue << endl;
  
	//double b =10.02;    //   watch out  this line   as and extra assign   itz effect at line with 3(///) pValue =b;  

     cout << "3. Value of double in manipulate: " << pValue << endl;
   		 
 ///   pValue =b;      <----- 3(///)
	
		pValue =10.02;   // new value of pValue and of dValue
	
    cout << "4. Value of double in manipulate: " << pValue << endl;
    
}

int main() {

	int nValue = 10;
    
	int *pnValue = &nValue;
 
   int **ppValue = &pnValue; 
     
	    int &value =nValue;   // A reference variable is declare and assigned with Addreas(or give a new name (Aliase)) of nValue variable;


	cout << "Int value: " << nValue << endl;
	
	cout << "Pointer to int address: " << pnValue << endl;
	cout << "Pointer of pointer  to int address: " <<ppValue << endl;
	*pnValue = 6;
	cout << "Int value via pointer: " << *pnValue << endl;
     
     **ppValue =7;
    cout << "Int value via pointer of  pointer: " << **ppValue << endl;
	
	cout << "Int value: " << nValue << endl;
	
	
	
	 value =29;    // A NEW  value is assigned in reference variable 
	cout << "Int value: " << nValue << endl;
		
	
	cout << "==================" << endl;
	

	double dValue = 123.4;

	cout << "1. dValue: " << dValue << endl;
  manipulate(dValue);   ///CALL BY VALUE    actual argument
	cout << "5. dValue: " << dValue << endl;
 
	getch();
	return 0;
}
