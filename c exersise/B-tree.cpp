// CODE by _soumyadip
// C++ Program to implement
// iterative segment tree.
#include <bits/stdc++.h>
using namespace std;
 
void construct_segment_tree(vector<int>& segtree,
                            vector<int>& a, int n)
{
    // assign values to leaves of the segment tree
    for (int i = 0; i < n; i++)
        segtree[n + i] = a[i];
 
    /* assign values to internal nodes
    to compute maximum in a given range */
    for (int i = n - 1; i >= 1; i--)
        segtree[i] = max(segtree[2 * i],
                         segtree[2 * i + 1]);
}
 
void update(vector<int>& segtree, int pos, int value,
            int n)
{
    // change the index to leaf node first
    pos += n;
 
    // update the value at the leaf node
    // at the exact index
    segtree[pos] = value;
 
    while (pos > 1) {
 
        // move up one level at a time in the tree
        pos >>= 1;
 
        // update the values in the nodes in
        // the next higher level
        segtree[pos] = max(segtree[2 * pos],
                           segtree[2 * pos + 1]);
    }
}
 
int range_query(vector<int>& segtree, int left, int
                                                    right,
                int n)
{
    /* Basically the left and right indices will move
        towards right and left respectively and with
        every each next higher level and compute the 
        maximum at each height. */
    // change the index to leaf node first
    left += n;
    right += n;
 
    // initialize maximum to a very low value
    int ma = INT_MIN;
 
    while (left < right) {
 
        // if left index in odd
        if (left & 1) {
            ma = max(ma, segtree[left]);
 
            // make left index even
            left++;
        }
 
        // if right index in odd
        if (right & 1) {
 
            // make right index even
            right--;
 
            ma = max(ma, segtree[right]);
        }
 
        // move to the next higher level
        left /= 2;
        right /= 2;
    }
    return ma;
}
 
// Driver code
int main()
{
    vector<int> a = { 2, 6, 10, 4, 7, 28, 9, 11, 6, 33 };
    int n = a.size();
 
    /* Construct the segment tree by assigning 
    the values to the internal nodes*/
    vector<int> segtree(2 * n);
    construct_segment_tree(segtree, a, n);
 
    // compute maximum in the range left to right
    int left = 1, right = 5;
    cout << "Maximum in range " << left << " to "
         << right << " is " << range_query(segtree, left,
                                           right + 1, n)
         << "\n";
 
    // update the value of index 5 to 32
    int index = 5, value = 32;
 
    // a[5] = 32;
    // Contents of array : {2, 6, 10, 4, 7, 32, 9, 11, 6, 33}
    update(segtree, index, value, n);
 
    // compute maximum in the range left to right
    left = 2, right = 8;
    cout << "Maximum in range " << left << " to "
         << right << " is " << range_query(segtree,
                                           left, right + 1, n)
         << "\n";
 
    return 0;
}
