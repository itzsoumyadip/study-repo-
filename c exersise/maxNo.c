/* max no finder */


#include <stdio.h>
#include <conio.h>

main ()

     {  int a,b,c, max=0;
        printf("enter 3 no");

        scanf("%d%d%d",&a,&b,&c);

        if (a>b)
         {
           if ( a>c)
                max=a;
            else
                max =b;
         }
        else {
             if (b>c)

                 max =b;
             else
                 max =c ;


        }
        printf("%d",max);
     }


