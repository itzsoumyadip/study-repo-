<?php

// --------------------------------
// -- array_key_exists()
// --------------------------------

/*

Knowing the keys of an array will allow us to access individual array elements.  If we don't
know the key/index we can check if the key exists by using the array_key_exists() function

NOTE: If accessing by a string key the string key must be in quotes.

Parameters
1. Required: Value you are searching for.
2. Required: Array you are searching in.

Returns: boolean value (1 = true, "" = false)

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

print_r($authors[1]);
print_r($authorsAssociative['quarky']);

print array_key_exists(5, $authors);

