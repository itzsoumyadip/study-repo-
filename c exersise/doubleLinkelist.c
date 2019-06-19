#include<stdio.h>
#include <stdlib.h>
#include<conio.h>
main()

typedef struct Node{
        int info;
        struct Node *prev,*next;
}node;

node *start=Null;
node *creatNode(){
  node *n;
 n=(node*)malloc(sizeof(node*));
 return(n);
}

node *insNode(){
  node *temp;
  temp =creatNode();
  printf("enter a number");
  scanf("%d",&temp->info);
   temp->next=Null;
   temp->prev=Null;
  if(star==Null)
    start=temp;
  else{
    start->prev=temp;
    temp->next=start
    start=temp;
  }


}
void main(){
 while(1){
     switch(menu()){
         case 1:
                insNode();
                break;
         case 2:
                delNode();
                break;
         case 3:
                viewList();
                break;
         case 4:
              exit(0);
         default:
          printf("Invalid choice");
     }
 }

}
int menu(){
    int ch;
    printf("\n\n1. Add value of the last");
    printf("\n2. Delecte first value");
    printf("\n3. View List");
    printf("\n4. Exit");
    printf("\n\n Enter your choice");
    scanf("%d",&ch);
    return(ch);
}
