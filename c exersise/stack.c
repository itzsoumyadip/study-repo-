#include<stdio.h>
#include<conio.h>
#include<stdlib.h>
#include<windows.h>


typedef struct arrayStack{
                     int TOP;
                     int capacity;
                     int array;


}AS;

AS *createStack(int);
int IsFull();
int IsEmpty();
int pop();
void push();


 AS *createStack(int cap){

 AS *stack;

 stack = malloc(sizeof(AS));
 stack->capacity= cap;
 stack->TOP = -1;
 stack->array =malloc(stack->capacity *sizeof(int));
 return(stack);

 }

int IsFull(AS *stack){

 if (stack->TOP==stack->capacity -1)
      return(1);
 else
        return(0);
}

int IsEmpty(AS *stack){


    if(stack->TOP== -1)

        return(1);
    else
        return(0);

}
void push(AS *stack,int item)

{
     if (!IsFull(stack))
     {
         stack->TOP++;

     stack->array[stack->TOP]=item;
     }
}

int pop(AS *stack){

     int item;
     if (!IsEmpty(stack)){

    item=stack->array[stack->TOP];
    stack->TOP--;
    return(item);
    }
      return(-1);
}

main()

 {
    AS  *stack;
    int choice;
   while(1)
   {
       printf("\n1. Push");
       printf("\n2. POP");
       printf("\n3. Exit");
       printf("\n\n. Enter your choice");

       scanf("/d",&choice);

    switch(choice){
       case 1:
            push();
             break;
       case 2:
           pop();
          break;
       case 3:
          exit(0);
          break;
       default:
          printf("Invalid choice");

   }
  }
 }



