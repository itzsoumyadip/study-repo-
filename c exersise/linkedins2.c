#include<stdio.h>
#include <stdlib.h>
#include<conio.h>
typedef struct NODE {
     int info;
     struct NODE *link;
} node;

node *cretNode();
void insNode();
void delNode();
void viewList();
void insNodeEnd();
int menu();

node *start=NULL;

node *cretNode() {
 node *n;
 n = (node*)malloc(sizeof(node*));
 return(n);
 }

 void insNode(){
        node  *temp, *t;
        temp=cretNode();
        printf("Enter a number");
        scanf("%d",&temp->info);
        temp->link=NULL;

            if(start==NULL)
            start=temp;
            else{
                t=start;
                while(t->link!=NULL){
                    t=t->link;
                }
                    t->link=temp;
            }
 }
 void insNodeEnd(){
     node *temp,*t;
     temp =cretNode();
     printf("Enter a number");
        scanf("%d",&temp->info);
         temp->link=NULL;

             if(start==NULL)
            start=temp;
            else{
                t=start;
                temp->link=t;
                start=temp;

 }
 }

void delNode(){

     node *r;
     if(start==NULL)
        printf("linked is empty");
     else{
         r=start;
         start=start->link;
         free(r);
     }
}
void viewList(){
     node *t;
    if(start==NULL)
      printf("linke is empty");
    else{
     t=start;
      while(t!=NULL){
         printf("%d ",t->info);
         t=t->link;
      }
    }
}
int menu(){
    int ch;
    printf("\n\n1. Add value of the last");
    printf("\n2. Delecte first value");
    printf("\n3. View List");
    printf("\n4. Exit");
    printf("\n5. add a value at beging of list");
    printf("\n\n Enter your choice");
    scanf("%d",&ch);
    return(ch);
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
         case 5:
             insNodeEnd();
              break;
         default:
          printf("Invalid choice");
     }
 }

}
