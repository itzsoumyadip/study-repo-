
#include <stdio.h>
#include <conio.h>

main()
{
    int x,count=0;

    printf("enter your number ");
    scanf("%d",&x);



     while(x=1)
     {
       x=x/10;
       count++;
     }

    printf(" no of digit=%d",count);

}
