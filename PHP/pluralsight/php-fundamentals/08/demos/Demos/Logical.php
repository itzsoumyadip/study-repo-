<?php

// --------------------------------
// -- Logical Operators ~ &&, ||, and, or, !
// --------------------------------

/*

&&      Both sides are true
and     Both sides are true

||      Either side just need to be true
or      Either side just need to be true

!       True if the value is not true

*/

//$var1 = (6 < 7);
//$var2 = (8 == 8);

$var1 = true;
$var2 = false;


// Break it down for everyone
var_dump($var1);
var_dump($var2);
var_dump($var1 && $var2);
var_dump($var1 || $var2);
var_dump(!$var1);

