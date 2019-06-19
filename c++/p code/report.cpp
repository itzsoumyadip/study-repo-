// #include <iostream>
// #include<conio.h>
// using namespace std;
// float READINFO();
// class report
// {
// private:
//     /* data */
//      int ado;
//      char str[20];
//      float marks[4];
//      int i=0;
//      int j;
//           float GETAVG(float marks[] ){
//          float avg;
//            float sum;

//                  for (i=0;i<5;i++) {
//                    sum = sum +marks[i];
//                     }
//             avg = (sum/5);
//             cout<<"avg"<<avg<<endl;
//             return avg;
//      }
//     //float average = GETAVG();

// public:
//       float READINFO(){
//             cout<<"enter 4 digit admission no "<<endl;
//             cin>>ado;
//              cin.get(str,20);
//              cout<<"enter name"<<endl;

//             cout<<"marks"<<endl;

//             for(i=0;i<5;i++)
//                cin>>marks[i];

//             if (i=5)
//              GETAVG(&marks[i]);

//               ;

//             }
//     void DISPLAYINFO(){
//         cout<<ado<<endl<<str[20]<<endl;

//     }
//       // report(/* args */);
//    // ~report();
// };

//  int main(){
//    report c1;

//    cout<<"enter"<<endl;
//    c1.READINFO();
//    c1.DISPLAYINFO();
//     getch();




//  }
#include<iostream>
#include<stdio.h>
#include<conio.h>
#include<fstream>
using namespace std;

class REPORT
{
	int adno;
	char name[20];
	float marks[5];
	float average;
	int i=0;
	void GETAVG()
	{
       
		//average = (marks[0]+marks[1]+marks[2]+marks[3]+marks[4])/5;
	     



		  float avg;
           float sum=0.0;

                 for ( i=0;i<5;i++) {
                   sum = sum +marks[i];
                    };
            average = (sum/5);
		
		
		
		
		//cout<<"average="<<average<<endl;

     }
	
	
	

public:
	void READINFO();
	void DISPLAYINFO();
};

void REPORT::READINFO()
{

	do
	{
		cout<<"Enter 4 digit admission number ";
		cin>>adno;
	}while(adno<999 || adno>10000);

      //gets(name);
	cout<<"Enter name";
	
	     
	/* !!!!!!! ****@@@ !!!ATTENTION @@@!!!!!!*******!@@@@@ **/
//scanf("%c",&name);  /* ***********    remove this line "scanf"  and run  , and  include it once ,, and report me differnce   */
  //   gets(name);
  cin>>name;
	cout<<"Enter marks in ";

	for( i=0;i<5;i++)
	{
		cout<<"Subject "<<i+1<<":";

		cin>>marks[i];
	};

	GETAVG();
}



void REPORT::DISPLAYINFO()
{

	cout<<"Admission number:"<<adno<<" Name:"<<name<<" Marks are:"<< marks[0]<<" "<< marks[1]
	<<" "<<marks[2]<<" "<< marks[3]<<" "<< marks[4]<<" Average:"<<average;
}

int main()
{
	REPORT obj;
	obj.READINFO();
	obj.DISPLAYINFO();

	getch();
	return 0;
}






