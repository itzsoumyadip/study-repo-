#include<bits/stdc++.h>
using namespace std;




void insertionShort(int A[],int N)
{
            int j;
        for(int i=1;i<N;i++){             // checks from index 1 ,
            int temp = A[i];  // value of i'th ,index is stored in 'temp' for sorting
            for(j=i-1;j>=0 && temp<A[j];j--){ /* loop only work if value weight  of (temp)i'th position is less then value weight of j position}
// j=i-1 previous block of i in array 'A' .// and  j= j-1, it checks value from previous block of index i to index 0 , and also if temp(really i'th index value ) value weight  is less then j'th index value */
               A[j+1]=A[j];       // j+1=='i' for fast case only ,,next case j -- // value is greater so  value of A[j] is transfer to 'i' block ,now j -- (means j
        }
            A[j+1]= temp;  //// outer loop ,, why  A[j+1]=temp;?? because temp contain  value weight is less   ()
        }

}


int main(){

int A[]={566,899,100,99,56,45,12,10,9,8,7,6,4,0,65,78,3,1,2,45};
int len=sizeof(A)/sizeof(A[0]);
insertionShort(A,len);

for(int i=0;i<len;i++)
cout<<"\t\a"<<A[i];
cout<<"\n array size is "<<len;

}
