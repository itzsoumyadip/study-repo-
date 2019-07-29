<?php

// --------------------------------
// -- array_pop()
// --------------------------------

/*

Pop an element off the end of the array.

Paramenters
1. Required: array you wish to remove the last element from. Altered by reference

Return: Value of the element in the array.

*/

$authors = array(
        "Charles Dickens", 
        "Jane Austin", 
        "William Shakespeare"
    );


$lastValue = array_pop($authors);

print $lastValue;
print_r($authors);

