<?php

// --------------------------------
// -- Default Parameters
// --------------------------------


/* 
If a specific parameter is not always passed in or if you want a 
value to be set by default, but allow the options to change it later in 
the prgoram, you can set parameters by default. 
*/

function bookByAuthorYear($authorName, $year = 1910)
{
    echo $year;
    echo "\n";
    echo $authorName;
    echo "\n";
    //echo "This will list all the books written by ". $authorName ." in the year". $year;
}


$year = 1920;
$authorName = "William Shakespeare";

bookByAuthorYear($authorName);  # this one, year will be 1910 because it's not passed in and the default is used
bookByAuthorYear($authorName, $year); #this one, year will be 1920. It uses the passed in variable instead of the default