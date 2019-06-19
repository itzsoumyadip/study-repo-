#include<stdio.h>
#include<conio.h>
 display(int*,int);
 //void del(int*,int,int);
void insert(int*, int,int,int );
void main()
{
	int a[7]={11,22,35,19,57,44};
	int p, ele;
	clrscr();
	display(a,6);
	printf("\n eneter position");
	scanf("%d",&p);
	printf("\n enter new elrment");
	scanf("%d",&ele);
	insert(a,7,p,ele);
       //	del(a,6,p);
	display(a,7);
	getch();
}

 display(int a[],int n)
{       int i;
	for (i=0;i<=n-1;i++)
	printf(" %d ",a[i]);
	return ;
}
void insert(int a[],int n,int p, int ele)

{
	int i;
	i=n;
	while(i!=p-1)
	  {
		a[i]= a[i-1];
		i--;
	  }
	a[p-1]=ele;
	return;
}
