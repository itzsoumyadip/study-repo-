<?php

// --------------------------------
// -- Multidemensional Arrays
// --------------------------------

/*

Array's can hold array's. This is known as multidemensional array.
They can be as complex and you can handle. :)

*/

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

print_r($authors);
print_r($authors["Male"]);
print_r($authors["Male"]["Mark Twain"]);
print_r($authors["Male"]["Mark Twain"][1]);