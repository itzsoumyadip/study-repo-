#include<bits/stdc++.h>
#include<iostream>
using namespace std;
class Item
{
private:
    /* data */
  int f; int g;
public:
    // int a; int b;

//     Item(){
  //       a=0; b=0;
   //      cout<<a<<b<<endl;
// }
//    Item(int c,int d){
//         a=c; b=d;
//    }
//   void changeData(){
  //    f=a; g=b;
//}


 void showData(){
      cout<<"Showiing value of f and g of i1 "<<f<< " and \a "<<g<<endl;
 }
/*
  int getF(){
        cin>>a;
        return 0;
  }
 int getG(){
      cin>>b;
      return 0;
 } */
   Item(){}
 Item (int m,int n){
     f=m; g=n;
 }

};




class prduct
{
private:
    /* data o*/
    int a; int b;
public:

//     prduct (){
//       a=0; b=0;
//      }

//    prduct (int c,int d){
//       a=c; b=d;
//      }

     void setData() {
        
        cout<<"Enter the vlue of Product class \n";
        
        cin>>a>>b;
     }
    //    operator Item(){
    //     Item temp;
    //  temp.a=a; temp.b=b;

    //   return  Item (temp) ;
    //    }
     operator Item(){
          
          return Item(a,b);
     }

};














int main(){
   prduct p1; Item i1;   // object declare
    p1.setData();
     i1=p1;
//     i1.changeData();
    i1.showData();
}

