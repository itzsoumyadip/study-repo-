// defualt argument

#include <iostream>
#include <conio.h>

int fun(int,int,int=0);
//using namespace std;

int main() {
    int a ,b ,c ;
  std::cout << "ENTER THE NUMBER";
  std::cin>>a>>b;
 // fun(a,b);

    std::cout<< "\n sum is"<<fun(a,b);
    std::cout <<"\n enter value of c";
    std:: cin>>c;
   //  fun(a,b,c);
    std::cout<<"\n \a sum is "<<fun (a,b,c);



}
int fun(int x, int y, int z){

   return(z+y+x);

}
