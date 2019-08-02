let insertionSort= (A) =>{
let i,j,temp;
 for (i=1;i<A.length;i++){
      temp=A[i];
      for(j=i-1;j>=0 && temp<A[j];j--)
          A[j+1]=A[j];
     A[j+1]=temp;
 }

}
let A=[566,899,100,99,56,45,12,10,9,8,7,6,4,0,65,78,3,1,2,45]

insertionSort(A);
console.log(A)
console.log(A.length)