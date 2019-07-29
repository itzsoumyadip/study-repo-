<?php

// --------------------------------
// -- in_array()
// --------------------------------

/*

Checks if a value exists inside an array.

Parameters
1. Required: The value you are searching for
2. Required: The array you are searching
3. Optional: Set to 'true' the function will also check the type and compare it in the array

Return:
Returns a boolean value (1 = true, 2 "" = false)


*/

$authors = array(
        "Charles Dickens", 
        "Jane Austin", 
        "William Shakespeare",
        "Mark Twain", 
        "Louisa May Alcott",
        13
    );


//print in_array("Jane Austin", $authors);
//print in_array("L.M. Montgomery", $authors);

print in_array("13", $authors, true);

