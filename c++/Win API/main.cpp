#include<windows.h>


int WINAPI WinMain(HINSTANCE hInst, HINSTANCE hPrevInst, LPSTR args, int ncmdshow)//HINSTANCE hInst (instance of application or id of application of windows class ), HINSTANCE hPrevInst, LPSTR args (string  and command line string ), int ncmdshow (it say how windows will show up Eg minimize or maximize)
{
    MessageBox(NULL,"Hello","My first Gui",MB_OK);
    return 0;
}
