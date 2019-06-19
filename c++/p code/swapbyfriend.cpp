/* read and write  and dont forget to "omit" all comment while writing assignment 
 .. and  ... if u do not want to write "std"  then use this line 
 "  #include <iostream.h> insted of #include<iostream>" .....
 learn then write */
z

#include<iostream>



class w;
class q {
    private:
        int a;
    public:
        void setdata(int x) {
            a = x;
        }
    friend void swap(q, w);
};
class w {
    private:
        /* data */
        int b;
    public:
        void setdata(int y) {
            b = y;
        }
    friend void swap(q, w);
};

void swap(q j, w f) {
    q temp; // cointains class q members  =a
    // w temp1;  // cointains class w members =b
    std::cout << "before swap a= " << j.a << " b=" << f.b << std::endl;
    temp.a = j.a;
    j.a = f.b;
    f.b = temp.a;
    std::cout << "after swap a= " << j.a << " b=" << f.b << std::endl;

}
int main() {
    q t;
    w r;
    t.setdata(2);
    r.setdata(3);
    swap(t, r);
    return 0;
}