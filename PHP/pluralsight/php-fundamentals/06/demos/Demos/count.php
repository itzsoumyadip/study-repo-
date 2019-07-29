<?php

// --------------------------------
// -- count()
// --------------------------------

/*

Counts all the elements in an array

Parameters
1. Required: The array you want to count the elemtns of
3. Optional: Set to 'true' (COUNT_RECURSIVE) the function will also check the type and compare it in the array

Return:
Returns an integers totalling the number of elemtns in the array


*/

$authors = array(
        "Charles Dickens", 
        "Jane Austin", 
        "William Shakespeare",
        "Mark Twain", 
        "Louisa May Alcott",
    );


print count($authors);

//-- Sample with multi-dementional array
$authors = array(
        "Male" => array(
            "Charles Dickem" => array("A Christmas Carol", "Oliver Twist"), 
            "Willaim Shakespeare" => array("Romeo & Juliet", "Richard III"),
            "Mark Twain" => array("The Adventures of Tom Sawyer", "The Prince and the Pauper")
        ),
        "Female" => array(
            "L. M. Montgomery" => array("Anne of Green Gables", "Anne of Avonlea"),
            "Louisa May Alcott" => array ("Little Women")
        )
);

print count($authors, COUNT_RECURSIVE); # the second parameter counts all values in the array

