<?php

// --------------------------------
// -- require and require_once
// --------------------------------

/*

This requires that a class must be loaded before executing the rest of the script. 

If it's not there, the script will terminate with a fatal error.

*/

include 'Person.php';
include_once 'Author.php';

require 'RandomClass.php';

 
$newAuthor = new Author("Samuel Langhorne", "Clemens", 1899);
echo $newAuthor->getCompleteName();