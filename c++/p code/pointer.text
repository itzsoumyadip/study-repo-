    
#include <iostream>
using namespace std;

void manipulate(double *pValue)  // pass by addreass 
{
	cout << "2. Value of double in manipulate: " << *pValue << endl;  // return value oF dValue aS *pvalue hold addreass  of dValue
  

   *pValue =10.02;  // Assigned with new value with dValue   as   *pvalue hold addreass  of dValue
     
  /*   
    {{{{{ {

void manipulate(double *pValue)  // pass by addreass 
{
	cout << "2. Value of double in manipulate: " << *pValue << endl;  // return value oF dValue aS *pvalue hold addreass  of dValue
  double b = 10.0;

  *pValue =b; // means   Assigned with new value with dValue    as   *pvalue hold addreass  of dValue  ..and see description of *Pointer
  
  
  pValue =&b; //  // here    pValue =&b; means it pValue  start ponting  with new addreas b ..  previos it point -> dvalue
    
/* 
/*=====================================================  *Pointer    =================================================================*/
/*======================================================================================================================*/




// *pointer  means derference((means it point  addres    for pre declare variable) !!!!!->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  >>>>>>>>>>*pointer   only return value  or can   save another  new   value  of that pre declaree variable  )
  
  
  so  assigment  WITH NO if   *pValue =&b; as it &b return address.... as *pointer only return value  or can   save another  new   value  of that pre declaree variable that it was point ,,
  
      
      ///     pValue =&b;  means   Assigned(point) with new address   b   
          // here    pValue =&b; means it pValue  start ponting  with new addreas b ..  previos it point -> dvalue
   
     /*======================================================================================================================*/
   
   
  */ 
   
   
   
   
   cout << "4. Value of double in manipulate: " <<*pValue << endl;  // return value oF dValue aS *pvalue (dereference) hold(point) addreass  of dValue;
    	
	cout << "Pointer to int address: " << pValue << endl;  // return address of pValue 
    
   *pValue =10.02;  // Assigned with new value in dValue   as   *pvalue hold addreass  of dValue 
  //ERROR ::::  pValue =10.02;      cannot convert ‘double’ to ‘double*’ in assignment     and AS 10.02 DOES NOT   GET MEMOREY  still so it have no address to whome pvalue will point 
}     
     
     
     
     
     /*======================================================================================================================*/
     
       *Pointer  can create confusion  when 
       	int *pnValue = &nValue;   // pointer holding address of -->>  nvalue
	
	it means pointer  *pnValue declare  initialize and start holding(pointing ) address of   nValue
	
	
	but * pointer actually works differnt way after that  ---it saves  and return value of nValue 
     
     
     
     
     
     
     
     
     
     }}}}}}}
     
     
    */ 
   	cout << "4. Value of double in manipulate: " <<*pValue << endl;  // return value oF dValue aS *pvalue hold addreass  of dValue
    	
	cout << "Pointer to int address: " << pValue << endl;  // return address of pValue 
    
    
}

int main() {

	int nValue = 10;
    
	int *pnValue = &nValue;   // pointer holding address of -->>  nvalue
 
   int **ppValue = &pnValue;   /// pointer of pointer holding address of pointer -->> pnValue
   
     
     
	 


	cout << "Int value: " << nValue << endl;
	
	cout << "Pointer to int address: " << pnValue << endl;
	cout << "Pointer of pointer  to int address: " <<ppValue << endl;
	*pnValue = 6;
	cout << "Int value via pointer: " << *pnValue << endl;
     
     **ppValue =7;
    cout << "Int value via pointer of  pointer: " << **ppValue << endl;
	
	cout << "Int value: " << nValue << endl;
	

	
	cout << "==================" << endl;

	double dValue = 123.4;

	cout << "1. dValue: " << dValue << endl;
	manipulate(&dValue);  // call by reference ;  
	cout << "4. dValue: " << dValue << endl;

	return 0;
}




seee more at https://stackoverflow.com/questions/4955198/what-does-dereferencing-a-pointer-mean
https://en.wikipedia.org/wiki/Dereference_operator


/*===============================================  *Pointer  update ===========================================================*/

*pointer (derefference pointer)

 pointer points a string 
then star(*) and pointer name will actually give us and the actual value

eg  
string text[]={"one, two , three"};
string  *pValue = text;
       
    
  cout<<*pValue
  
  here pointer points a string  
  then star(*) and pointer name(pValue) will actually give us and the actual value

