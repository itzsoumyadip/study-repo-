#include<bits/stdc++.h>

#include<conio.h>

using namespace std;
void bubble_sort(int[], int);



int main() {
  int n;
  cout << "welcome to bubble sort" << endl;
  cout << "Enter total no of element  you want to enter " << endl;
  cin >> n;
  int a[n];
  cout << "Enter the element " << endl;
  for (int arr = 0; arr < n; arr++) {
    cin >> a[arr];
  }
  int len = sizeof(a) / sizeof(a[0]); /// this is for, if the array size is unknown at beginning

  bubble_sort(a, len);

  for (int i = 0; i < len; i++) {
    cout << "after sorting  " << a[i] << endl;
  }
  getch();
  return 0;
}





///DEFINATION


void bubble_sort(int a[], int len) {
  int flag;
  for (int round = 1; round <= len - 1; round++) { /// one round is less need for get the result in bubble sort because after one round last index of an array will be sorted and that does not need to be sorted farther
    int flag = 0;
    for (int swapRound = 0; swapRound <= len - 1 - round; swapRound++) {

      if (a[swapRound] > a[swapRound + 1]) {
        flag = 1;
        /*    int temp = a[swapRound+1];
            a[swapRound+1]=a[swapRound];
            a[swapRound]=temp;
          */
        int temp = a[swapRound]; //  different type but same from of swapping
        a[swapRound] = a[swapRound + 1];
        a[swapRound + 1] = temp;



      }
    }
    if (flag == 0) {
      cout << "Total no of round is " << round << endl;
      return ;

    }


  }
  // return 0;
}
