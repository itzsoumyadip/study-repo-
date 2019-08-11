let partition = (arr, beg, end) =>  {

    let left, right, temp, loc, flag;
    loc = left = beg;
    right = end;
    flag = 0;
    while (flag != 1) {
        while ((arr[loc] <= arr[right]) && (loc != right))
            right--;
        if (loc == right)
            flag = 1;
        else if (arr[loc] > arr[right]) {
            temp = arr[loc];
            arr[loc] = arr[right];
            arr[right] = temp;
            loc = right;
        }
        if (flag != 1) {
            while ((arr[loc] >= arr[left]) && (loc != left))
                left++;
            if (loc == left)
                flag = 1;
            else if (arr[loc] < arr[left]) {
                temp = arr[loc];
                arr[loc] = arr[left];
                arr[left] = temp;
                loc = left;

            }
        }
    }
    return loc;


}

const quick_sort= (a, beg, end) => {
    let loc;
    if (beg < end) {
        loc = partition(a, beg, end);
        quick_sort(a, beg, loc - 1);
        quick_sort(a, loc + 1, end);
    }
 return arr
}


arr=[20, 65, 89, 56]
console.log(quick_sort(arr, 0, 4- 1));
console.log(arr);
