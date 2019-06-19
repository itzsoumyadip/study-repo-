#include<graphics.h>
main()
{
    int gd=0,gm;
    initgraph(&gd,&gm,"");
    //circle(100,200,100);
    //rectangle(300,50,450,100);
    line(100,100,100,300);
    line(100,300,300,300);
    line(300,300,300,100);
    line(100,100,300,100);
    line(200,20,100,100);
    line(200,20,300,100);
    rectangle(150,225,250,300);
    rectangle(260,120,280,140);



    getch();
    closegraph();

}
