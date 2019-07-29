<?php

// --------------------------------
// -- Returning Values
// --------------------------------


/*
Sometimes you don't want the information in the function to be printed out. You need it to return a value for use later.
Functions can only return a single value.
*/

function getAuthor()
{
    return "Charles Dickens";
}

function bookByAuthorYear($authorName, $year = 1910)
{
    echo "This will list all the books written by ". $authorName ." in the year". $year;
}

$year = 1920;
$authorName = getAuthor();

bookByAuthorYear($authorName, $year);  #return value stored in the variable

