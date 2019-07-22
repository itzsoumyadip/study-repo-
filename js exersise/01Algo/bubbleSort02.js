/// bubble Sort  more  favourable for functional programming

//let arr =[30,40,20,10,65,56]
let arr =[90,20,356,65,45,3,5,6,123331,87]

function swap(arr,index1,index2){
    
          let temp = arr[index1];
          arr[index1] = arr[index2];
          arr[index2] = temp;
          
        }


function bubble_sort(arr) {

    let round;
    for (round = 1; round <= arr.length - 1; round++) {
      let flag = 0;
      for (let i = 0; i <= (arr.length - 1) - round; i++) {
        if (arr[i] > arr[i + 1]) {
            flag = 1
            swap(arr,i,i+1)
         
        }
      }
      if (flag === 0) {
        console.log('total no of round' + ' ' + round)
        return arr;
      }
    }
   
    return arr
  
  }
  
  console.log(bubble_sort(arr))
