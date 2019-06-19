

                       //   SUM OF    COMPLEX NO



#include<iostream>
#include<stdio.h>
//#include<conio.h>
//#include <iostream>
//#include <stdlib.h>

class complex {

     int a, b;

   public :
       int c=67;
       //int *p;

      // p =&c;

     void setData(int x,int y){
        a=x, b=y;
    }
    void showData(){
   std::cout << "\n a="<<a<<" "<<"b="<<b;

    }
   complex  add(complex c){
      complex temp;
       temp.a= a+c.a;
       temp.b= b+c.b;
       return(temp);
   }



};


/* MAIN PROGRAM */
//#include <iostream>

#include <stdlib.h>
int main(){

  system("color b9");
complex c1,c2,c3;
complex *tem;

c1.setData(3,4);
c2.setData(2,3);
//c3=c1+c2;
c3= c1.add(c2);
c1.showData();
c3.showData();
//std::cin>>tem->c;
//scanf("%d",&tem->c);
/*std::cin>>c4->p;
scanf("%d",&c4.c);
c1.c=c4.c;
printf("halais %d ",c1.c); */

printf("halais %d ",tem->c);

}

