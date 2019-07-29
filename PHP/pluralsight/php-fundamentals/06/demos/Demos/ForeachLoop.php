<?php

// --------------------------------
// -- Foreach Loop
// --------------------------------

/*

The foreach loop is a simple way to loop through the values in an associative array

*/

// String keys
$authors = array( 
        "quarky" => "Charles Dickens", 
        "brilliant" => "Jane Austin", 
        "dead" => "William Shakespeare"
    );


foreach($authors as $val)
{
    print $value. "\n";
}

foreach($authors as $key => $value)
{
    print $value." (".$key.")\n";
}