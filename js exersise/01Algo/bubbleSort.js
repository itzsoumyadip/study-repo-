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

//console.log(bubble_sort([9,11,24,36,48,59,65,79,88]))
console.log(bubble_sort([99,81,74,66,58,49,35,29,8]))
//console.log(bubble_sort([30,40,20,10,65]))
//console.log(bubble_sort([34,15,29,8]));
