let a = [1, 56, 98, 2, 65, 89, 20, 99, 69, 89];
let temp, LOC, K;
for (K = 0; K <= a.length - 2; K++) { 
    LOC = MIN(a, K, a.length); 
    // swaping area
    temp = a[K];
    a[K] = a[LOC];
    a[LOC] = temp;
}
for (K = 0; K <= 9; K++) {
    console.log(a[K])
}


function MIN(A, K, Klen) {
    let j, LOC, MIN;
    MIN = A[K]; 
    LOC = K;

    for (j = K + 1; j <= Klen - 1; j++) 
        if (MIN > A[j]) {
            MIN = A[j]; 
            LOC = j; 
        }
    return LOC;
}