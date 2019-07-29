<?php

// --------------------------------
// -- Floating Point Numbers, aka Decimals, Real Numbers
// --------------------------------

$normalDecimal = 1.234;
$anotherDecimal = -12.34;
$yetAnotherDecimal = 0.15;

// PHP supports scientific notation as well

$scientific = 0.1234E4; # value is 1234
$anotherScientific = 1234E-4; # value = .1234

echo $anotherScientific;


/*******************
Remember - 
    PHP is a weak-type language. There is no need to declare 
    what type of value your variable is holding.
*******************/