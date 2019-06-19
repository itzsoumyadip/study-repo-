#include<iostream>

using namespace std;

template < class X, class Y >
  class area {
    private:
      /* data */
      X hight;
    Y base;
    Y a;
    public:
      void setdata(X h, Y b) {
        // 
        hight = h;
        base = b;

      }
    void triangle() {

      a = (0.5) * hight * base;


    }
    void showdata() {

      cout << "area of triangle is =" << a << endl;
    }

  };
int main() {
  int q;
  float w;
  cout << "enter hight and base" << endl;
  cin >> q >> w;
  area < int, float > o, n;
  o.setdata(q, w);
  o.triangle();
  o.showdata();
  n = o;
  n.showdata();
}