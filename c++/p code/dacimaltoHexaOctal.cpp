#include<iostream>
#include<conio.h>
#include<iomanip>
using namespace std;

/* decimal to hexa and octal converter by inheritance */

/* base class number */
 class NUMBER {

            static int i;
            
        public:

                static void setRoi(int r)
                { i =r;}
             virtual void  displayNum(){
                     
                 cout<<" the decimal value is ="<<i<<endl;
             }
                     int valueReturn(){

                         return (i);
                     }
            /*void setValue(){
                cout<<"please enter a intigervalue "<<endl;
             cin>>i;}
             */

                
                 
             
 };
 int  NUMBER :: i =42;
 
   /*   starting of hexa converter class*/
 class HexNum:public NUMBER {
             public:
               
            // HEXA ALGO
              int  h = valueReturn();
            void displayNum(){
                cout<<"value of hexa is = " <<hex<<h<<endl; 
            }
 };


class OctNub: public NUMBER{
          // octa alog 
     
     public:
          int o=valueReturn();
          //  int p = o + 10;

            void displayNum(){
                cout<<"value of octa is =" <<oct<< o<<endl; 
            }




};









int main (){
     NUMBER *bptr;
     
     HexNum d;
     OctNub c;
      
    //bptr =&as;
          int s;
         cout<<"please enter a intigervalue "<<endl;
             cin>>s;
         
           bptr->setRoi(s);
    bptr=&d;
       bptr->displayNum();
  
    bptr=&c;
        bptr->displayNum();
}