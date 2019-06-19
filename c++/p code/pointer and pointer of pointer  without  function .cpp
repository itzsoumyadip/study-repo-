#include <iostream>
using namespace std;

// void manipulate(double *pValue) {
// 	cout << "2. Value of double in manipulate: " << *pValue << endl;
// 	*pValue = 10.0;
// 	cout << "3. Value of double in manipulate: " << *pValue << endl;
// }

int main() {

	int nValue = 10;
    
	int *pnValue = &nValue;
 
   int **ppValue = &pnValue; 
     
	 


	cout << "Int value: " << nValue << endl;
	
	cout << "Pointer to int address: " << pnValue << endl;
	cout << "Pointer of pointer  to int address: " <<ppValue << endl;
	*pnValue = 6;
	cout << "Int value via pointer: " << *pnValue << endl;
     
     **ppValue =7;
    cout << "Int value via pointer of  pointer: " << **ppValue << endl;
	
	cout << "Int value: " << nValue << endl;
	cout << "==================" << endl;

// 	double dValue = 123.4;

// 	cout << "1. dValue: " << dValue << endl;
// 	manipulate(&dValue);
// 	cout << "4. dValue: " << dValue << endl;

	return 0;
}
