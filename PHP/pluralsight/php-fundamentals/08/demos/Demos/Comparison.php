<?php

// --------------------------------
// -- Comparison
// --------------------------------

/*

==      Are the values equal
===     Are the values equal and of the same type
!=      Are the values not equal to each other
<>      Are the values not equal to each other
!==     Are the values not equal of the same type
>       Value is greater than
>=      Value is great than or equal to
<       Value is less than
<=      Value is less than or equal too

*/

var_dump(8 == 8);
var_dump("8" == 8);
var_dump("8" === 8);

var_dump(7 != 6);
var_dump(7 <> 6);
var_dump("7" != 7);
var_dump("7" !== 7);

var_dump(7 > 7);
var_dump(7 < 6);
 
var_dump(7 <= 6); 
var_dump(7 >= 7);
