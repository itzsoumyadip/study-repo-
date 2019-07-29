<?php

// --------------------------------
// -- array_push()
// --------------------------------

/*

Push an element onto the end of an array

Paramenters
1. Required: Array you will be adding the element to. Altered by reference
2. Required: value you are adding to the array

Returns
Returns the count of how many elements are in the array (including the new one added).

*/

$authors = array(
        "Charles Dickens", 
        "Jane Austin", 
        "William Shakespeare"
    );


array_push($authors, "Louisa May Alcott"); #used for indexed array

//-- alternate method
$authors[] = "L. M. Montgomery"; #preferred method of adding the element.
print_r($authors);

/* 
- array_push() will cause a warning if the first argumrnt is not an array. 
- If you use the [] the array will be created and no warning issued.
*/

$newAuthorList[] = "Mark Twain";

print_r($newAuthorList);
