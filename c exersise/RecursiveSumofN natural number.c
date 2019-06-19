#include <stdio.h>
#include <conio.h>

 main()

//int sum(int a);
 {
    int a=0,k=0;
    printf(" enter a number \n");
    k=sum(a);
    scanf("%d",&a);
    printf("%d",k);
 }
sum(int x)
   {
     int w;
     if (x==1)
     {
         return (x);
     }
    else
    {
        w=x+sum(x-1);

        return w;
    }
   }

