#include <stdio.h>
int min ( int A[],int k,int n)
{
    int loc,MIN,j;
    MIN =A[k];
    loc = k;
     for (j=k+1;j<=n-1;j++)
        if(MIN>A[j])
        {
             MIN = A[j];
             loc= j ;

        }

     return(loc);
}
int main()
{
            int A[]={33,22,11,55,66,44,77,99,88,1};

                int k,temp,n,loc;

                for (k=0;k<=n-2;k++)
       {
        loc =min(A,k,10);
        temp=A[k];
        A[k]= A[loc];
        A[loc]= temp;
}

  for(k=0;k<=9;k++)
  printf(" %d",A[k]);
  getch();
}

