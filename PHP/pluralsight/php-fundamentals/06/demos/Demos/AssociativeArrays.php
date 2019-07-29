<?php

// --------------------------------
// -- Associative Arrays
// --------------------------------

/*

Keys of an array can be either Integers or Strings. If a key is set at any point in the array, they array is considered an associative array.

*/

$authors = array( 
        "quarky" => "Charles Dickens", 
        10 => "Jane Austin", 
        "poetic" => "William Shakespeare",
        "Mark Twain"
    );



print_r($authors);