#include <stdio.h>
#include<conio.h>
int main()
{
        struct students{3};
        int i ;
        float dummy;

           for ( i=0;i<3;i++)
                {
                    printf("enter for student %d",i+1);
                    fflush(stdin);
                    scanf("%d,%c,%f",&s[i].id,&s[i].name,&dummy);
                    s[i].sjp= dummy;
                }

                  printf("id /t name /t sjp ");
                  for (i=0;i<3;i++)
                  printf("%d /t %s /t %f",s[i].id,s[i].name,s[i].sjp);

                  printf("\n");

                  return 0;


}


{


        struct student {
                        int id ;
                        char name [];
                        float sjp ;
                       };

}
