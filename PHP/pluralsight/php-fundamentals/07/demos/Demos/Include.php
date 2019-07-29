<?php

// --------------------------------
// -- include and include_once
// --------------------------------

/*

Includes a file into the current script. Ideal for including classes into your applications.

Include_once makes sure that the file is only included once. Even if it is included again in another file.

*/

include 'Person.php';
include_once 'Author.php';
 
$newAuthor = new Author("Samuel Langhorne", "Clemens", 1899);
echo $newAuthor->getCompleteName();