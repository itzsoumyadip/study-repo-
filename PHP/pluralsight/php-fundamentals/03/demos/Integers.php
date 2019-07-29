<?php

// --------------------------------
// -- Integers
// --------------------------------

$regularNumber = 1234;
$regularNumberNegative = -1234; # you can also use the + in front of a number

// If the int is too long the compiler will automatically change it to a floating point.
$reallyLongNumber = 987654321987654321; 

// typical range (approx.)   
//    -2147483648 to 2147483648 (32bit system)
//    -9E18 to 9E18 (64bit system)


// Octal numbers, '0' (zero) placed in front.
$octalNumber = 01234; # decimal value = 668


// Hex numbers, '0x' placed in front
$hexNumber = 0xABC; # decimal value = 2748
$hexSimple = 0xFF; # decimal value = 255


//-- Binary numbers, '0b' placed in front
$binaryNumber = 0b110100110;  # decimal value = 422
$binarySimple = 0b1000; # decimal value = 8

/*******************
Remember - 
    PHP is a weak-type language. There is no need to declare 
    what type of value your variable is holding.
*******************/