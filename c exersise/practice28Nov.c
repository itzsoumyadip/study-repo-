#include<stdio.h>
#include <stdlib.h>
#include<conio.h>
typedef struct NODE {
     int info;
     struct NODE *link;
} node;

node *cretNode();
void insNodeEnd();
/* void delNode();
void viewList();
*/
void viewList();
void InsNodeBeg();
int menu();

node *start=NULL;

node *cretNode() {
 node *n;
 n = (node*)malloc(sizeof(node*));
 return(n);
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





 void InsNodeBeg() {
         node *temp,*t;
         temp= cretNode();
         printf("Eneter a no to isnstert at beganing");
         scanf("%d",&temp->info);
        temp->link=NULL;

    if (t!=NULL)
    {
        t=start;
         temp->link=t;
        //temp->info;
        start=temp;
    }
   else{ start=temp;

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
         //printf("\n %d ",t->info);
      }
    }
}

/*     new code


void viewList(){

 node *t;
    if(start==NULL)
          printf("linked is empty");
    else  {
           t= start;
           while(t!=NULL){
            printf("%d",t->info);
            t=t->link;
            }

      }
}


*/






 /*void insNode(){
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
 } */



  /*   valid   program

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
    printf("\n\n Enter your choice");
    scanf("%d",&ch);
    return(ch);
}     */

int menu(){
    int ch;
    printf("\n**** \a** MENU********\a*");
    printf("\n1. Add value of the last");
    printf("\n2. Delecte first value");
    printf("\n3. View List");
    printf("\n4. Exit");
    //printf("\n\n Enter your choice");
    scanf("%d",&ch);
    return(ch);


}


void main(){
    system("color f9");
 while(1){
     switch(menu()){

    case 1:
        InsNodeBeg();
        break;


        case 2:
                 insNodeEnd();
                break;
       /*  case 2:
                delNode();
                break;
         case 3:
                viewList();
                break;
                */




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

