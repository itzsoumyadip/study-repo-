let a =[1,56,98,2,65,89,20,99,69,89];
let temp,LOC,K;
  for(K=0;K<=a.length-2;K++){            /// a.length-2 because K=0 have to loop upto index of (a.lemgth-2) value (NUMER OF ELEMENT - 1 => means  TOTAL INDEX(start from 0 )  and again - 1 => FOR comparing value of K, with last value of  array )
       LOC=MIN(a,K,a.length);       // MIN(array,K,length of array) => RETURN INDEX OF SMMALEST VALUE IN ARRAY
      // swaping area
        temp=a[K];
        a[K]=a[LOC];
        a[LOC]=temp;
   }
   for(K=0;K<K.length;K++)
 {    console.log(a[K])
}


function   MIN(A,K,Klen)
{
    let j,LOC,MIN;
    MIN=A[K];    // VALUE OF ARRAY AT INDEX NO  K IS INITIALIZE WITH-- MIN
    LOC=K;       // INDEX NO OF K IS INITIALIZE

       for(j=K+1;j<=Klen-1;j++)   // loops upto last index no from second index of array ,, first index is k=0 ,
            if(MIN>A[j]){
                 MIN=A[j];     // MIN BECOME LOWEST VALUE (LOWEST VALUE MEANS  UPTO WHICH INDEX J  LOOP REVLOVE)
                  LOC=j;      // SAVE THE INDEX OF THE LOWEST VALUE
            }
        return LOC;
}


