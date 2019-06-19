#include <stdio.h>
#include <conio.h>
//#define  sum s
int main()

{
    float  fnum,snum,sum=0;
     char  operator;

     printf(" Enter  Your option  \n  + \t addition \n  - \t minus \n * \t multiplication \n / \t divition \n  For continu press y");



     do
     {
         printf("\n Enter  two number \n");
         scanf("%f%f",&fnum,&snum);
         fflush(stdin);
         printf("\n Enter your  option");
         scanf("%c",&operator);

            switch (operator)
                 {
                     case '+':
                      sum = fnum+snum;
                      printf("%f",sum);
                         break;
                 }



     } while ( operator =='y');


}
