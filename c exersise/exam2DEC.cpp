#include<graphics.h>
#include<stdio.h>
int main()
{
     system("color f9");
     int gd =0 , gm;
    initgraph(&gd,&gm ,"");
system("color f9");
  circle(200,100,80);
  rectangle(300,100,450,400);
  line(200,200,500,300);
ellipse( 250,340,0,360,150,40);
 line( 250,300,250,38 0);
    getch();
    closegraph();
}
