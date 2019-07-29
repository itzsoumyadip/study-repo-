<?php

// --------------------------------
// -- sort(), ksort(), asort()
// --------------------------------

/*

sort - Sorts an arrays values

Parameters
1. Required: the array you wish to sort by it's values
2. Optional Sort Flags (not covered in this course)


asort() - Sort an array's values, preserve the indexes.

Parameters
1. Required: the array you wish to sort by it's values
2. Optional: Sort Flags (not covered in this course)

ksort() - Sort an array's keys, preserve key -> data relationship.
          Used mostly with Associative arrays

Parameters
1. Required: the array you wish to sort by it's values
2. Optional: Sort Flags (not covered in this course)

*/

$authors = array(
        "Charles Dickens", 
        "Jane Austin", 
        "William Shakespeare",
        "Mark Twain", 
        "Louisa May Alcott"
    );

$authorsAssociative = array(        
        "poetic" => "William Shakespeare",
        "brilliant" => "Jane Austin", 
        "quarky" => "Charles Dickens"
    );

//sort($authors);
//sort($authorsAssociative);

//print_r($authors);
//print_r($authorsAssociative);

//asort($authors);
//asort($authorsAssociative);

//print_r($authors);
//print_r($authorsAssociative);

ksort($authors);
ksort($authorsAssociative);

print_r($authors);
print_r($authorsAssociative);
