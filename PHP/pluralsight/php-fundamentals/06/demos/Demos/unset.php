<?php

// --------------------------------
// -- unset()
// --------------------------------

/*
Unset/Remove a given variable

Parameters
1. Required: variable you wish to remove/unset/delete
2. Optional: more variables to be unset, separated by a comma.

Returns: Nothing

*/

$authors = array(
        "Charles Dickens", 
        "Jane Austin", 
        "William Shakespeare"
    );

$authorsAssociative = array( 
        "quarky" => "Charles Dickens", 
        "brilliant" => "Jane Austin", 
        "poetic" => "William Shakespeare"
    );

//---------------------  Unsetting a value
unset($authorsAssociative['poetic']);
unset($authors[0], $authors[2]);
unset($authors);

print_r($authors);
print_r($authorsAssociative);

