
/* average of array number*/

#include <stdio.h>
#include<conio.h>

int main()
{
 int a[10],i,sum=0;
 float avg;
printf("ENTER  10 NUMBER ");

       for (i=0;i<=9;i++)
       scanf ("%d",&a[i]);

    for(i=0;i<=9;i++)
    sum = sum + a[i];
    avg = sum/10.0;

printf("average %f",avg);
}
