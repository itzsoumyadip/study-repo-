<?php

// --------------------------------
// -- Passing Parameters
// --------------------------------

/* 
Parameters or arguments can be accepted by functions. 
Those parameters or values then are used as part of the functions code.
*/


function bookByAuthor($authorName)
{
    echo $authorName;
    echo "\n";
    //echo "This will list all the books written by ". $authorName;
}

function bookByAuthorYear($authorName, $year)
{
    echo $year;
    echo "\n";
    echo $authorName;
    echo "\n";
    //echo "This will list all the books written by ". $authorName ." in the year". $year;
}

$year = 1910; 
$authorName = "William Shakespeare";

bookByAuthor($authorName); #passing the parameters
bookByAuthorYear($authorName, $year); #passing the parameters
