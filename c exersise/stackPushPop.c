         #include<stdio.h>
#include<conio.h>

#define MAX 10
typedef struct stack{
		int arr[MAX];
		int top ;

		 }STACK;
  STACK ST;
 void push(int);
 int pop();
 void  main()
	{
	//clrscr();
	 ST.top=-1;
	push(10);
	 push(20);
	 push(50);
	 push(70);

	 printf("deleted element=%d",pop());
	 push(40);
	 printf("\n pop element = %d", pop());
	 getch();
	}


void push (int n)
{
if (ST.top <MAX -1)
  {
  ST.arr[ST.top+1]=n;
  ST.top++;
  }
  else
  printf("stack overflow");
  }

  int pop()
  {
  int n;
  if (ST.top>=0)
  { n=ST.arr[ST.top];
  ST.top--;
  return n;
   }
   else
    printf("underflow");
    return 0;
    }
