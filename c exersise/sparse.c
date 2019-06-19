/* code written by soumyadipSaha */

#include<stdio.h>
#include<conio.h>
typedef struct sp

{
int row;
int col;
int nz;
}sparse;


void sparse_create(sparse*);
void display_sparse(sparse*);
void transpose (sparse*);
int search(sparse*,int,int);
void main()
{
 int r,c,nz;
 sparse s[100];
 //clrscr();
 printf("enter total rows and columns");
 scanf("%d%d",&r,&c);
 s[0].row=r;
 s[0].col=c;
  sparse_create(s);
  display_sparse(s);
  getch();
transpose(s);
  getch();
return;
}
void sparse_create(sparse s[])
{
 int i,j,n,k=1;
 for(i=0;i<s[0].row;i++)
{
	for(j=0;j<s[0].col;j++)
	{
	   printf("\n enter value");
	   scanf("%d",&n);
	   if(n!=0)
		{
		  s[k].row=i;
		  s[k].col=j;
		  s[k].nz=n;
		  k++;
		}
	}
}
 s[0].nz=k-1;
 return;
}
void display_sparse(sparse s[])
{
 int i,j;
 for(i=0;i<s[0].row;i++)
  {
	printf("\n\n");
	for(j=0;j<s[0].col;j++)
	{
	  printf("%d\t",search(s,i,j));
	}
  } return;
}
int search(sparse s[],int r,int c)
{
 int k;
 for(k=1;k<=s[0].nz;k++)
  {
	if(s[k].row==r && s[k].col==c)
	return (s[k].nz);
  }return (0);
}
void transpose (sparse s[])
{
 int i,j;
 for(i=0;i<s[0].col;i++)
	{
	 printf("\t\n\n");
	 for(j=0;j<s[0].row;j++)
	 printf("%d\t",search(s,j,i));
	}
}
