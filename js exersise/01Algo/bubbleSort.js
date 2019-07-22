/// bubble sort 

//let arr =[30,40,20,10,65,56]
//let arr =[1,2,20,140,300,455]
function bubble_sort(arr) {

  let round, temp;
  for (round = 1; round <= arr.length - 1; round++) {
    let flag = 0;
    for (let i = 0; i <= (arr.length - 1) - round; i++) {
      if (arr[i] > arr[i + 1]) {
        flag = 1
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    if (flag === 0) {
      console.log('total no of round' + ' ' + round)
      return arr;
    }
  }
  //console.log(arr +" "+ arr.length)
  return arr

}

console.log(bubble_sort([90,20,356,65,45,3,5,6,123331,87]))